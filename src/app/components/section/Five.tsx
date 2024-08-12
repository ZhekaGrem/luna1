'use client';
import React, { useRef } from 'react';
import styles from '@/app/styles/five.module.css';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { slideUp, slideRCenter, emergence } from '@/animations/animation';

const Five = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className={styles.bg5_2}>
      {isInView ? (
        <div className={styles.bg5_1}>
          <motion.div
            variants={slideRCenter}
            initial="hidden"
            animate="visible"
            className={styles.first_block}></motion.div>
          <motion.div
            variants={slideRCenter}
            initial="hidden"
            animate="visible"
            className={styles.block_text}>
            <p className="text-xs font-extrabold md:text-2xl xl:text-3xl">
              {' '}
              CA: 0x6f5d9662a998cEfaDE4F29129a46d4D15289b093
            </p>
          </motion.div>
          <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.img_1}>
            <Image src="/join_us.png" width={531} height={417} alt="join us" />
          </motion.div>
          <motion.div variants={emergence} initial="hidden" animate="visible" className={styles.img_2}>
            <a href="https://x.com/LunamemeTeam" target="_blank" aria-label="X" title="X">
              <Image src="/svg/X.svg" width={136} height={108} alt="x" />
            </a>
          </motion.div>
          <motion.div variants={emergence} initial="hidden" animate="visible" className={styles.img_3}>
            <a href="https://t.me/lunameme1" target="_blank" aria-label="telegram" title="telegram">
              <Image src="/svg/telegram.svg" width={136} height={108} alt="telegram" />
            </a>
          </motion.div>
          <motion.div variants={emergence} initial="hidden" animate="visible" className={styles.img_3_1}>
            <a href="https://medium.com/@lunameme" target="_blank" aria-label="medium" title="medium">
              <Image src="/m.png" width={136} height={108} alt="medium" />
            </a>
          </motion.div>
          <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.img_4}>
            <Image src="/svg/dog3.svg" width={201} height={341} alt="x" />
          </motion.div>
          <motion.div variants={emergence} initial="hidden" animate="visible" className={styles.img_5}>
            <Image src="/text1.png" width={79} height={60} alt="x" />
          </motion.div>
          <div className={styles.text_down}>
            <p className="text-sm font-black md:text-lg">Copyright © 2024</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Five;
