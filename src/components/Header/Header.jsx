import styles from "./Header.module.scss";

const Header = () => {
  const items = [
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
  ];

  return (
    <header className={styles["header__wrapper"]}>
      <nav>
        <ul className={styles['header__nav-list']}>
          {items.map((item) => (
            <li className={styles['header__nav-item']} key={item.text}>
              <a className={styles['header__nav-link']} href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
