"use client";

import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted={muted}
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        className="absolute right-6 top-24 z-20 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:top-28"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>

      {/* Content */}
      {/* <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 text-center md:pb-24">
        <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">
          True travel freedom isn&apos;t about waiting for access it&apos;s about creating it.
        </h1>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" />
      </div> */}
    </section>
  );
}
