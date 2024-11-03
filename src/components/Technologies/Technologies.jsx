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
          <h2 className={styles["technologies__title"]}>Ingredients</h2>
          <p>Here are some gorgeous ingredients that are very helpful. But shhh! Don&apos;t tell anyone...</p>
          <p>They should only be used by good-hearted wizards and witches</p>
          <div className={styles["technologies__list-wrapper"]}>
            <TechnologiesNameList />
            <TechNewList />
            <IconsList inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
