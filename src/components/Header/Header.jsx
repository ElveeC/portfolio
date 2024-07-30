import styles from "./Header.module.scss";

const Header = () => {
  
  const Items = {
    ITEMS_EN: [
      {
        text: "Technologies",
        link: "#technologies",
      },
      {
        text: "Portfolio",
        link: "#portfolio",
      },
      {
        text: "Contacts",
        link: "#contacts",
      },
    ],
    ITEMS_RU: [
      {
        text: "Технологии",
        link: "#technologies",
      },
      {
        text: "Портфолио",
        link: "#portfolio",
      },
      {
        text: "Контакты",
        link: "#contacts",
      },
    ],
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header_inner"]}>
        <nav>
          <ul className={styles["header__nav-list"]}>
            {Items.ITEMS_EN.map((item) => (
              <li className={styles["header__nav-item"]} key={item.text}>
                <a className={styles["header__nav-link"]} href={item.link}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
