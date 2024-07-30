import { useInView } from "react-intersection-observer";

import IconsList from "../IconsList/IconsList";

import TechnologiesNameList from "../TechnologiesNameList/TechnologiesNameList";
import TechNewList from "../TechNewList/TechNewList";

import styles from "./Technologies.module.scss";

const Technologies = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={styles["technologies"]}>
      <div className={styles.technologies__inner}>
        <div className={styles["technologies__name-wrapper"]}>
          <h2 className={styles["technologies__title"]}>Technologies</h2>
          <div className={styles["technologies__list-wrapper"]}>
            <TechnologiesNameList />
            <TechNewList />
          </div>
        </div>
        <IconsList inView={inView} />
      </div>
    </section>
  );
};

export default Technologies;
