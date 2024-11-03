import styles from "./Portfolio.module.scss";

import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Manufacturing company",
      name: "acrilica",
      description:
        "Website for a stone kitchen and bathroom furniture manufacturing company",
      technologies: "JS, HTML, SASS, Gulp",
      link: "#",
      github: "#",
    },
    {
      title: "Educational platform",
      name: "give5",
      slogan: "Play the games, take the selfcheck tests, develop your with the educational web platform Give5!",
      description: "Website with accounts for teachers and students, games, theory, excercises. Still in production",
      technologies: "React, Redux, HTML, SASS, Vite",
      link: "#",
      github: "#",
    },
    {
      title: "Online shop",
      name: "camera",
      description: "Online shop",
      technologies: "TS, React, Redux, Vite",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolio__inner}>
        <h2 className={styles["portfolio__title"]}>Magic potions</h2>
        <p>Unfortunately I can&apos;t provide you with full information about projects I took part in.</p>
        <p>This is strictly prohibited by the most powerful spell called NDA</p>
        <p>Here you find some code fragments.</p>
        <p>The original pictures and texts were replaced. The animation was slightly changed - all due to the three magic letters - NDA</p>
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
