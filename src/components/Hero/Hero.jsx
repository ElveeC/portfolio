import styles from "./Hero.module.scss";

const Hero = () => {

  const HeroText = {
    EN: {
        description: "Use magical instruments to create wonderful websites",
        title: "Front-end fairy",
    },
    RU: {
        description: `Использую магию, чтобы создавать волшебные сайты`,
        title: "Фея фронтенда",
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <p className={styles.hero__description}>
          {HeroText.EN.description}
        </p>
        <h1 className={styles.hero__title}>{HeroText.EN.title}</h1>
      </div>
    </section>
  );
};

export default Hero;
