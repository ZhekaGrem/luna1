import styles from '@/app/styles/four.module.css';
import InfinitySliderThird from '@/app/components/layout/InfiniteSliderThird';
import PhoneSliderThird from '@/app/components/layout/PhoneSliderThird';

const Four = () => {
  return (
    <section className={styles.bg4_1}>
      <div className={styles.bg4_2}>
        <div className={`hidden md:block ${styles.bg4_3} `}>
          <InfinitySliderThird />
        </div>
        <div className={`${styles.bg4_3} md:hidden`}>
          <PhoneSliderThird />
        </div>
      </div>
    </section>
  );
};

export default Four;
