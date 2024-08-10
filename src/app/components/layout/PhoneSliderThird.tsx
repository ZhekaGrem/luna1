'use client';
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import LeftIcon from '../icon/LeftIcon';
import RightIcon from '../icon/RightIcon';

import { thirdColum } from '@/db/data';

type ImageType = {
  id: number;
  src: string;
  alt: string;
};

const data: ImageType[] = thirdColum;

const PhoneCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLUListElement>({
    initial: 0,
    loop: true,
    mode: 'snap',

    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  useEffect(() => {
    if (loaded && instanceRef.current) {
      const interval = setInterval(() => {
        instanceRef.current?.next();
      }, 2500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [loaded, instanceRef]);
  return (
    <>
      <div className="relative overflow-hidden">
        <ul ref={ref} className="keen-slider">
          {data.map((item) => (
            <li key={item.id} className="keen-slider__slide w-full p-6">
              <Image
                className="h-full w-full object-cover"
                width={400}
                height={400}
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
            />

            <Arrow
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
            />
          </>
        )}
        {loaded && instanceRef.current && (
          <div className="mt-4 flex justify-center">
            {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`mx-1 h-3 w-3 rounded-full focus:outline-none ${currentSlide === idx ? 'bg-white' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

type ArrowProps = {
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Arrow: React.FC<ArrowProps> = ({ left = false, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 rounded-full border-4 border-solid border-white bg-[#fda1d7] p-2 transition-opacity duration-300 hover:bg-opacity-100 focus:outline-none ${left ? 'left-2' : 'right-2'}`}>
    {left ? <LeftIcon /> : <RightIcon />}
  </button>
);

export default PhoneCarousel;
