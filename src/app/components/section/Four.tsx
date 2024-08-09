import styles from '@/app/styles/four.module.css';
import InfinitySliderThird from '@/app/components/layout/InfiniteSliderThird';

const Four = () => {
  return (
    <section className={styles.bg4_1}>
      <div className={styles.bg4_2}>
        <div className={styles.bg4_3}>
          <InfinitySliderThird />
        </div>
      </div>
    </section>
  );
};

export default Four;
