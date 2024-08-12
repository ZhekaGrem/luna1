'use client';
import styles from '@/app/styles/one.module.css';
import InfiniteSliderFirst from '@/app/components/layout/InfiniteSliderFirst';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideUp } from '@/animations/animation';

const One: React.FC = () => {
  return (
    <section className={styles.bg1_1}>
      <div className={styles.bg1_2}>
        <div className={styles.bg1_3}>
          <div className={styles.first_block}></div>
          <div className={styles.dog}>
            <Image src="/svg/dog.svg" width={127} height={127} alt="x" />
          </div>
          <div className={styles.medium}>
            <a href="https://medium.com/@lunameme" target="_blank" aria-label="medium" title="medium">
              <Image src="/m.png" width={79} height={60} alt="medium" />
            </a>
          </div>
          <div className={styles.x}>
            <a href="https://x.com/LunamemeTeam" target="_blank" aria-label="X" title="X">
              <Image src="/svg/X.svg" width={79} height={60} alt="x" />
            </a>
          </div>
          <div className={styles.telegram}>
            <a href="https://t.me/lunameme1" target="_blank" aria-label="telegram" title="telegram">
              <Image src="/svg/telegram.svg" width={79} height={60} alt="telegram" />
            </a>
          </div>
          <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.buy}>
            <Image src="/svg/buy.svg" width={350} height={60} alt="x" />
          </motion.div>
          <div className={styles.dog_bg}>
            <Image src="/svg/dog.svg" width={635} height={60} alt="x" />
          </div>
          <div className={styles.text_bg}>
            <Image src="/text1.png" width={482} height={60} alt="x" />
          </div>
          <div className={styles.text_sm}>
            <Image src="/text2.png" width={508} height={60} alt="x" />
          </div>
          <div className={styles.img_down}>
            <Image className="w-full" src="/svg/bg-2.svg" width={3000} height={60} alt="x" />
          </div>
          <div className={styles.slider}>
            <InfiniteSliderFirst />
          </div>
        </div>
      </div>
    </section>
  );
};

export default One;
