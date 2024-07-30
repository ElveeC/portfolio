import { useInView } from "react-intersection-observer";
import styles from "./TechnologiesNameList.module.scss";
import cn from "classnames";

const TechnologiesNameList = () => {
  
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const Title = {
    EN: "Magic potion ingredients",
    RU: "Ингредиенты для зелья",
  };

  return (
    <div className={styles["tech-in-use"]}>
      <h3 ref={ref} className={cn(styles["tech-in-use__title"], {[styles["tech-in-use__title--animated"]]: inView})}>{Title.EN}</h3>
      <ul className={styles["tech-in-use__list"]}>
        <li className={styles["tech-in-use__item"]}>JavaScript</li>
        <li className={styles["tech-in-use__item"]}>TypeScript</li>
        <li className={styles["tech-in-use__item"]}>React</li>
        <li className={styles["tech-in-use__item"]}>Redux</li>
        <li className={styles["tech-in-use__item"]}>HTML</li>
        <li className={styles["tech-in-use__item"]}>PUG</li>
        <li className={styles["tech-in-use__item"]}>CSS, SASS</li>
        <li className={styles["tech-in-use__item"]}>Vite, Webpack, Gulp</li>
      </ul>
    </div>
  );
};

export default TechnologiesNameList;
