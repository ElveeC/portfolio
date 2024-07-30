import styles from "./TechNewList.module.scss";

const TechNewList = () => {
    
  const Title = {
    EN: "Trying to master",
    RU: "Пытаюсь познать",
  };

  return (
    <div className={styles["tech-new"]}>
      <h3 className={styles["tech-new__title"]}>{Title.EN}</h3>
      <ul className={styles["tech-new__list"]}>
        <li className={styles["tech-new__item"]}>Express</li>
        <li className={styles["tech-new__item"]}>Node.js</li>
        <li className={styles["tech-new__item"]}>MongoDB</li>
      </ul>
    </div>
  );
};

export default TechNewList;
