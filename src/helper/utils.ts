import { format } from "date-fns";

// Format time in MM:SS
export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

 
export const formattedTime = (timestamp: string | number | Date): string => {
  return format(new Date(timestamp), "hh:mm a");
};
