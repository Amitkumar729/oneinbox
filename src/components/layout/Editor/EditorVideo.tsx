import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Maximize2, X } from "lucide-react";
import { EditorContentProps } from "../../../types";

export const EditorVideoMessage: React.FC<EditorContentProps> = ({
  message,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const videoUrl = message.content.text.videoUrl[0] || [];

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const progressBar = progressRef.current;
      const clickPosition = e.nativeEvent.offsetX;
      const progressBarWidth = progressBar.clientWidth;
      const percentage = (clickPosition / progressBarWidth) * 100;

      const time = (percentage / 100) * duration;
      videoRef.current.currentTime = time;
      setProgress(percentage);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    // Pause video when closing expanded view
    if (isExpanded && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateProgress = () => {
      if (videoElement) {
        const progressPercent =
          (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(progressPercent);
      }
    };

    const handleMetaLoaded = () => {
      if (videoElement) {
        setDuration(videoElement.duration);
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateProgress);
      videoElement.addEventListener("loadedmetadata", handleMetaLoaded);
      videoElement.addEventListener("ended", () => setIsPlaying(false));
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateProgress);
        videoElement.removeEventListener("loadedmetadata", handleMetaLoaded);
        videoElement.removeEventListener("ended", () => setIsPlaying(false));
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

  if (isExpanded) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 
        z-50 flex flex-col items-center justify-center"
        onClick={(e) => {
          // Prevent closing if clicking on video or controls
          if ((e.target as HTMLElement).tagName !== "VIDEO") {
            toggleExpand();
          }
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleExpand}
          className="absolute top-4 right-4 text-white
           bg-blue-200 bg-opacity-50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Expanded Video Container */}
        <div className="relative w-full max-w-4xl">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full max-h-[80vh] rounded-lg"
            controls
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2">
        <div className="bg-[#f7f7f7] flex-col items-start p-1 max-w-[70%] w-fit rounded-lg relative">
          {/* Video Content */}
          <div className="flex flex-col w-full">
            <div className="flex group relative">
              {/* Video Player */}
              <div className="relative w-[300px]">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="max-w-[300px] max-h-[400px] rounded-t-lg"
                />

                {/* Video Controls */}
                <div className="bg-black bg-opacity-70 p-2 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-grow">
                    {/* Play/Pause Button */}
                    <button onClick={toggleVideoPlay} className="text-white">
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
                      {formatTime(videoRef.current?.currentTime || 0)}/
                      {formatTime(duration)}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button onClick={toggleExpand} className="text-white ml-2">
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
