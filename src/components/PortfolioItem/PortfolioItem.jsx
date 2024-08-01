import { useInView } from "react-intersection-observer";

import BathIcon from "../BathIcon/BathIcon";
import styles from "./PortfolioItem.module.scss";
import cn from "classnames";

const PortfolioItem = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const ItemType = {
    ACRILICA: "acrilica",
    GIVE5: "give5",
    CAMERA_SHOP: "camera",
  };

  return (
    <li ref={ref} className={styles["porfolio-item"]}>
      <div className={styles["porfolio-item__link-wrapper"]}>
        {item.name === ItemType.ACRILICA && <BathIcon inView={inView} />}
        <a className={styles["porfolio-item__link"]} href={item.link}>
          <h3
            className={cn(styles["portfolio-item__title"], {
              [styles["portfolio-item__title--animated"]]: inView,
            })}
          >
            <span
              className={cn(styles["portfolio-item__title-wrapper"], {
                [styles["portfolio-item__title-wrapper--animated"]]: inView,
              })}
            >
              {item.title}
            </span>
          </h3>
        </a>
      </div>

      <div className={styles["porfolio-item__inner"]}>
        <p className={styles["porfolio-item__description"]}>
          {item.description}
        </p>
        <p>{item.technologies}</p>
      </div>
    </li>
  );
};

export default PortfolioItem;
