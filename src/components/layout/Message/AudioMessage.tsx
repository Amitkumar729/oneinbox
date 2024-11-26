import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Maximize2, X, Music } from "lucide-react";
import { AudioMessageProps } from "../../../types";

export const AudioMessage: React.FC<AudioMessageProps> = ({ message }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const toggleAudioPlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const progressBar = progressRef.current;
      const clickPosition = e.nativeEvent.offsetX;
      const progressBarWidth = progressBar.clientWidth;
      const percentage = (clickPosition / progressBarWidth) * 100;

      const time = (percentage / 100) * duration;
      audioRef.current.currentTime = time;
      setProgress(percentage);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    // Pause audio when closing expanded view
    if (isExpanded && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateProgress = () => {
      if (audioElement) {
        const progressPercent =
          (audioElement.currentTime / audioElement.duration) * 100;
        setProgress(progressPercent);
      }
    };

    const handleMetaLoaded = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
      }
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateProgress);
      audioElement.addEventListener("loadedmetadata", handleMetaLoaded);
      audioElement.addEventListener("ended", () => setIsPlaying(false));
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateProgress);
        audioElement.removeEventListener("loadedmetadata", handleMetaLoaded);
        audioElement.removeEventListener("ended", () => setIsPlaying(false));
      }
    };
  }, []);

  // Format time in MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Render expanded view
  if (isExpanded) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 z-50 
        flex flex-col items-center justify-center"
        onClick={(e) => {
          // Prevent closing if clicking on audio controls
          if (!(e.target as HTMLElement).closest("audio")) {
            toggleExpand();
          }
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleExpand}
          className="absolute top-4 right-4 text-white
           bg-black bg-opacity-50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Expanded Audio Container */}
        <div
          className="relative w-full max-w-2xl bg-white/10 
        rounded-lg p-6 flex items-center space-x-4"
        >
          {/* Music Icon */}
          <div className="bg-white/20 rounded-full p-4">
            <Music size={48} className="text-white" />
          </div>

          {/* Audio Player */}
          <div className="flex-grow">
            <audio
              ref={audioRef}
              src={message.content.attachments[0].url}
              className="w-full"
              controls
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2">
        <div
          className="bg-[#f7f7f7] flex-col items-start 
        p-1  w-fit rounded-lg relative"
        >
          {/* Audio Content */}
          <div className="flex flex-col w-full">
            <div className="flex group relative">
              {/* Audio Player */}
              <div className="relative w-[300px]">
                {/* Music Icon */}
                <div className="bg-gray-200 rounded-full p-3 mx-auto w-fit mb-2">
                  <Music size={24} className="text-gray-600" />
                </div>

                {/* Audio Controls */}
                <div className="bg-black bg-opacity-70 p-2 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-grow">
                    {/* Play/Pause Button */}
                    <button onClick={toggleAudioPlay} className="text-white">
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    {/* Progress Bar */}
                    <div
                      ref={progressRef}
                      onClick={handleProgressChange}
                      className="flex-grow bg-gray-500 h-1 rounded-full cursor-pointer"
                    >
                      <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Time Display */}
                    <div className="text-white text-xs">
                      {formatTime(audioRef.current?.currentTime || 0)}/
                      {formatTime(duration)}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button onClick={toggleExpand} className="text-white ml-2">
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element for Playback */}
      <audio
        ref={audioRef}
        src={message.content.attachments[0].url}
        className="hidden"
      />
    </div>
  );
};
