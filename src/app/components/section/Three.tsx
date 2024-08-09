import styles from '@/app/styles/three.module.css';
import Image from 'next/image';
import InfiniteSliderSecond from '@/app/components/layout/InfiniteSliderSecond';

const Three = () => {
  return (
    <section className={styles.bg3_1}>
      <div className={styles.bg3_2}>
        <div className={styles.bg3_3}>
          <div className={styles.img_1}>
            <Image className="" src="/text3.png" width={221} height={93} alt="x" />
          </div>
          <div className={styles.img_1_2}>
            <Image className="" src="/svg/2dog.svg" width={453} height={353} alt="x" />
          </div>
          <div className={styles.img_2}>
            <Image className="" src="/svg/dog2.svg" width={380} height={595} alt="x" />
          </div>
          <div className={styles.img_3_1}>
            <Image className="" src="/image_6.png" width={346} height={346} alt="x" />
          </div>
          <div className={styles.img_3_2}>
            <Image className="" src="/text3.png" width={413} height={175} alt="x" />
          </div>
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
      </div>
    </section>
  );
};

export default Three;
