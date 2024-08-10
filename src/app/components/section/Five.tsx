import styles from '@/app/styles/five.module.css';
import Image from 'next/image';

const Five = () => {
  return (
    <section className={styles.bg5_2}>
      <div className={styles.bg5_1}>
        <div className={styles.first_block}></div>
        <div className={styles.block_text}>
          <p className="text-xs font-extrabold md:text-2xl xl:text-3xl">
            {' '}
            CA: 0xDAde98C0ee0E729988fD87C9FFa6Cba57635259e
          </p>
        </div>
        <div className={styles.img_1}>
          <a href="">
            <Image src="/join_us.png" width={531} height={417} alt="join us" />
          </a>
        </div>
        <div className={styles.img_2}>
          <a href="">
            <Image src="/svg/x.svg" width={136} height={108} alt="x" />
          </a>
        </div>
        <div className={styles.img_3}>
          <a href="">
            <Image src="/svg/telegram.svg" width={136} height={108} alt="x" />
          </a>
        </div>
        <div className={styles.img_4}>
          <a href="">
            <Image src="/svg/dog3.svg" width={201} height={341} alt="x" />
          </a>
        </div>
        <div className={styles.img_5}>
          <a href="">
            <Image src="/text1.png" width={79} height={60} alt="x" />
          </a>
        </div>
        <div className={styles.text_down}>
          <p className="text-sm font-black md:text-lg">Copyright © 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Five;
