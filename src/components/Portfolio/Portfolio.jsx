import styles from "./Portfolio.module.scss";

import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Acrylica",
      description:
        "Website for a stone kitchen and bathroom furniture manufacturing company",
      technologies: "JS, HTML, SASS, Gulp",
      link: "#",
    },
    {
      title: "Give5",
      description:
        "Educational website with accounts for teachers and students, games, theory, excercises. Still in production",
      technologies: "React, Redux, HTML, SASS, Vite",
      link: "#",
    },
    {
      title: "Camera shop",
      description: "Online shop",
      technologies: "TS, React, Redux, Vite",
      link: "#",
    },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolio__inner}>
        <h2 className={styles["portfolio__title"]}>Portfolio</h2>
        <ul className={styles["porfolio__list"]}>
          {portfolioItems.map((item) => (
            <PortfolioItem item={item} key={item.title} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
