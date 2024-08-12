'use client';
import { useRef } from 'react';

import styles from '@/app/styles/three.module.css';
import Image from 'next/image';
import InfiniteSliderSecond from '@/app/components/layout/InfiniteSliderSecond';
import { motion, useInView } from 'framer-motion';
import { slideInRight, slideUp, slideInLeft } from '@/animations/animation';

const Three = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className={styles.bg3_1}>
      <div ref={ref} className={styles.bg3_2}>
        {isInView ? (
          <div className={styles.bg3_3}>
            <div className={`${styles.bg2_4} absolute grid h-full w-full grid-cols-10 grid-rows-10 gap-4`}>
              {[...Array(100)].map((_, index) => (
                <div
                  key={index}
                  className="col-span-2 row-span-8 flex items-center justify-center gap-9 p-12 md:items-start">
                  <Image src="/gif2.gif" alt="Картинка 2" width={69} height={50} className="min-w-10" />
                </div>
              ))}
            </div>
            <div className={`${styles.bg2_4} absolute grid h-full w-full grid-cols-5 grid-rows-5 gap-4`}>
              {[...Array(25)].map((_, index) => (
                <div key={index} className="col-span-1 row-span-6 flex items-center justify-end p-12">
                  <Image src="/gif.gif" alt="Картинка 2" width={69} height={50} className="min-w-7" />
                </div>
              ))}
            </div>
            <div className={`${styles.bg2_4} grid h-full grid-cols-10 grid-rows-10 gap-4`}>
              {[...Array(100)].map((_, index) => (
                <div
                  key={index}
                  className="col-span-5 row-span-7 flex items-start justify-center gap-2 p-12 md:col-span-1">
                  <Image src="/gif3.gif" alt="Картинка 2" width={69} height={50} className="min-w-8" />
                </div>
              ))}
            </div>
            <motion.div variants={slideInLeft} initial="hidden" animate="visible" className={styles.img_1}>
              <Image className="" src="/text3.png" width={221} height={93} alt="x" />
            </motion.div>
            <div className={styles.img_1_2}>
              <Image className="" src="/svg/2dog.svg" width={453} height={353} alt="x" />
            </div>
            <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.img_2}>
              <Image className="" src="/svg/dog2.svg" width={380} height={595} alt="x" />
            </motion.div>
            <div className={styles.img_3_1}>
              <Image className="" src="/image_6.png" width={346} height={346} alt="x" />
            </div>
            <motion.div variants={slideInRight} initial="hidden" animate="visible" className={styles.img_3_2}>
              <Image className="" src="/text3.png" width={413} height={175} alt="x" />
            </motion.div>
            <div className={styles.img_up}>
              <Image className="w-full" src="/svg/bg-2.svg" width={3000} height={60} alt="x" />
            </div>
            <div className={styles.img_down}>
              <Image className="w-full" src="/svg/bg-4.svg" width={3000} height={60} alt="x" />
            </div>
            <div className={styles.carusel}>
              <InfiniteSliderSecond />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Three;
