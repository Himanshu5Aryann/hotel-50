import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
}

/**
 * Robust cinematic hero video.
 * - Always renders the poster image underneath so the hero never looks blank/broken.
 * - Attempts autoplay (muted + inline + loop) as browser policy requires.
 * - Fades the video in smoothly only once it can actually play.
 * - Silently falls back to the poster forever if video fails/network is poor.
 */
export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const markReady = () => setVideoReady(true);
    const markFailed = () => setVideoFailed(true);

    v.addEventListener("playing", markReady);
    v.addEventListener("error", markFailed);

    const tryPlay = () => {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — poster remains visible, no broken state.
        });
      }
    };
    tryPlay();

    return () => {
      v.removeEventListener("playing", markReady);
      v.removeEventListener("error", markFailed);
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-ink">
      <img
        src={poster}
        alt="Hotel Binwa View & Banquets wedding celebration"
        style={{ objectPosition: "50% 30%" }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady && !videoFailed ? "opacity-0" : "opacity-100"
        }`}
      />
      {!videoFailed && (
        <video
          ref={videoRef}
          style={{ objectPosition: "50% 30%" }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
