// import { usePortal } from '@/app/components/layout/PortalContext';
'use client';
import Image from 'next/image';
import styles from '@/app/styles/two.module.css';
import { motion } from 'framer-motion';
import { slideUp } from '@/animations/animation';
const Two = () => {
  return (
    <section className={styles.bg2_1}>
      <div className={styles.bg2_2}>
        <div className={styles.bg2_3}>
          <div className={`${styles.bg2_4} grid h-[600px] grid-cols-4 grid-rows-3 gap-4`}>
            <div className={`${styles.bg2_4} absolute grid h-full w-full grid-cols-5 grid-rows-5 gap-4`}>
              {[...Array(25)].map((_, index) => (
                <div key={index} className="col-span-1 row-span-6 flex items-center justify-end p-12">
                  <Image src="/svg/mini-plant.svg" alt="Картинка 2" width={20} height={25} className="" />
                </div>
              ))}
            </div>
            <div
              className={`${styles.bg2_4} absolute grid h-full w-full grid-cols-5 grid-rows-5 gap-4 opacity-35`}>
              {[...Array(15)].map((_, index) => (
                <div key={index} className="col-span-1 row-span-2 flex items-start justify-start p-12">
                  <Image src="/svg/mini-plant-2.svg" alt="Картинка 1" width={40} height={52} className="" />
                </div>
              ))}
            </div>
            <div className="col-span-2 row-span-2 flex items-start justify-center">
              <Image
                src="/svg/flower-white.svg"
                alt="Картинка 1"
                width={69}
                height={50}
                className="animate-spin-slow-3 object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 flex items-start justify-center p-12">
              <Image
                src="/svg/flower-pink.svg"
                alt="Картинка 2"
                width={69}
                height={50}
                className="animate-spin-slow-2"
              />
            </div>
            <div className="row-span-1 p-5">
              <Image
                src="/svg/flower-pink.svg"
                alt="Картинка 3"
                width={69}
                height={50}
                className="animate-spin-slow-2"
              />
            </div>
            <div className="col-span-1 row-span-2 flex items-start justify-center pt-8">
              <Image
                src="/svg/flower-white.svg"
                alt="Картинка 4"
                width={69}
                height={50}
                className="animate-spin-slow-2"
              />
            </div>
            <div className="col-span-2 row-span-2 flex items-start justify-end">
              <Image
                src="/svg/flower-white.svg"
                alt="Картинка 5"
                width={69}
                height={50}
                className="animate-spin-slow-3"
              />
            </div>
          </div>
          <div className={styles.block}></div>
          <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.dex_scr}>
            <a
              href="https://etherscan.io/address/0x6f5d9662a998cEfaDE4F29129a46d4D15289b093"
              target="_blank"
              aria-label="etherscan"
              title="etherscan">
              <Image src="/dex3.png" width={508} height={60} alt="etherscan" />
            </a>
          </motion.div>
          <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.text}>
            <h1>🌙 LUNA: The Token That Feels Like Home 🌙</h1>
            <p>
              Welcome to $LUNA, where love, community, and connection are at the core. 💖 Unlike other
              hype-driven coins, $LUNA represents warmth, care, and the shared journey toward financial
              freedom. As the cosmic partner of $Lunas, $LUNA brings balance and harmony to the chaotic crypto
              world. 🌌
            </p>
          </motion.div>

          {/* <motion.div variants={slideUp} initial="hidden" animate="visible" className={styles.dex_tol}>
            <a href="https://medium.com/@lunameme">
              <Image src="/dex2.png" width={508} height={60} alt="x" />
            </a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Two;
