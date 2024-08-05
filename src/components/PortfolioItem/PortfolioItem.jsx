import { useInView } from "react-intersection-observer";

import BathIcon from "../BathIcon/BathIcon";
import SinkIcon from "../SinkIcon/SinkIcon";
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
    <li ref={ref} className={styles["portfolio-item"]}>
      <div className={styles["portfolio-item__link-wrapper"]}>
        {item.name === ItemType.ACRILICA && <BathIcon inView={inView} />}
        {item.name === ItemType.ACRILICA && <SinkIcon inView={inView} />}
        <a className={cn(styles["portfolio-item__link"], {
                [styles["portfolio-item__link--animated"]]: inView,
              })} href={item.link}>
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

      <div className={cn(styles["portfolio-item__inner"], {
                [styles["portfolio-item__inner--animated"]]: inView,
              })}>
        <p className={styles["portfolio-item__description"]}>
          {item.description}
        </p>
        <p>{item.technologies}</p>
      </div>
    </li>
  );
};

export default PortfolioItem;
