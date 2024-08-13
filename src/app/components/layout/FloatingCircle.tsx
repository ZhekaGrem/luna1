'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';

const FloatingCircle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="relative">
      {isPlaying && (
        <div className="fixed bottom-28 left-5 z-50 h-16 w-16">
          <Image
            unoptimized
            src="/notesanimation.webp"
            alt="Animated GIF"
            width={40}
            height={40}
            className="h-auto w-full"
          />
        </div>
      )}
      <div
        className={`fixed bottom-5 left-5 z-50 h-16 w-16 rounded-full border-2 border-solid border-black bg-slate-400 ${isPlaying ? 'animate-spin-slow-2' : ''}`}>
        <Image
          src="/android-chrome-192x192.png"
          alt="Slide image"
          width={180}
          height={20}
          className={`h-auto w-full rounded-full object-cover ${isPlaying ? '' : 'opacity-50'}`}
        />
      </div>
      <div className={`fixed bottom-5 left-6 z-50 h-16 w-16 rounded-full`} onClick={togglePlay}>
        <PlayIcon className={`${isPlaying ? 'hidden' : ''}`} />
      </div>
      <audio ref={audioRef} loop>
        <source src="/music/Luna.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FloatingCircle;
