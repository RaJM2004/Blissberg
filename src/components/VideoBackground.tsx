
import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImageUrl?: string;
  className?: string;
}

const VideoBackground = ({ videoUrl, fallbackImageUrl, className }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full -z-20 ${className || ''}`}>
      {/* Removed the dark overlay to make the video visible */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={fallbackImageUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback text if video cannot be played */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
