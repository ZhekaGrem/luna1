'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import '@/app/styles/slider.css';

const InfiniteSliderFirst = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 3,
        spacing: 11,
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <section className="img5 relative overflow-hidden">
        <div ref={sliderRef} className="keen-slider marquee-right">
          {[...Array(20)].map((_, idx) => (
            <div key={idx} className="slide p-3">
              <Image
                src="/first_slider/1.png"
                alt="Slide image"
                width={175}
                height={20}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default InfiniteSliderFirst;
