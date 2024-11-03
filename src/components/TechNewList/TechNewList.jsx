import { useInView } from "react-intersection-observer";

import styles from "./TechNewList.module.scss";
import cn from "classnames";

const TechNewList = () => {

    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
      });

  const Title = {
    EN: "New ingredients",
    RU: "Познаю тайны",
  };

  return (
    <div className={styles["tech-new"]}>
      <h3 ref={ref} className={cn(styles["tech-new__title"], {[styles['tech-new__title--animated']] : inView})}>{Title.EN}</h3>
      <ul className={styles["tech-new__list"]}>
        <li className={styles["tech-new__item"]}>Express</li>
        <li className={styles["tech-new__item"]}>Node.js</li>
        <li className={styles["tech-new__item"]}>MongoDB</li>
      </ul>
    </div>
  );
};

export default TechNewList;
