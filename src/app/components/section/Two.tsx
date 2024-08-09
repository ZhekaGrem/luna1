// import { usePortal } from '@/app/components/layout/PortalContext';
'use client';
import Image from 'next/image';
import styles from '@/app/styles/two.module.css';
const Two = () => {
  return (
    <section className={styles.bg2_1}>
      <div className={styles.bg2_2}>
        <div className={styles.bg2_3}>
          <div className={styles.block}></div>
          <div className={styles.dex_scr}>
            <a href="">
              <Image src="/dex.png" width={508} height={60} alt="x" />
            </a>
          </div>
          <div className={styles.dex_tol}>
            <a href="">
              <Image src="/dex2.png" width={508} height={60} alt="x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Two;
