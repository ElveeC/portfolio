import { useInView } from "react-intersection-observer";

import BathIcon from "../BathIcon/BathIcon";
import BathIcon2 from "../BathIcon2/BathIcon2";
import SinkIcon from "../SinkIcon/SinkIcon";
import BuildingIcon from "../BuildingIcon/BuildingIcon";
import HotelIcon from "../HotelIcon/HotelIcon";
import CameraIcon from "../CameraIcon/CameraIcon";
import CameraIcon2 from "../CameraIcon2/CameraIcon2";
import CameraIcon3 from "../CameraIcon3/CameraIcon3";
import PhotoCameraIcon from "../PhotoCameraIcon/PhotoCameraIcon";
import PhotoCameraIcon2 from "../PhotoCameraIcon2/PhotoCameraIcon2";
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
        {item.name === ItemType.ACRILICA && (
          <>
            <HotelIcon inView={inView} />
            <BathIcon inView={inView} />
            <SinkIcon inView={inView} />
            <BathIcon2 inView={inView} />
            <BuildingIcon inView={inView} />
          </>
        )}
         {item.name === ItemType.GIVE5 && (
          <>
          </>
        )}
        {item.name === ItemType.CAMERA_SHOP && (
          <>
            <PhotoCameraIcon2 inView={inView} />
            <CameraIcon2 inView={inView} />
            <PhotoCameraIcon inView={inView} />
            <CameraIcon inView={inView} />
            <CameraIcon3 inView={inView} />
          </>
        )}
        <a
          className={cn(styles["portfolio-item__link"], {
            [styles["portfolio-item__link--animated"]]: inView,
          })}
          href={item.link}
        >
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

      <div
        className={cn(styles["portfolio-item__inner"], {
          [styles["portfolio-item__inner--animated"]]: inView,
        })}
      >
        <p className={styles["portfolio-item__description"]}>
          {item.description}
        </p>
        <p>{item.technologies}</p>
      </div>
    </li>
  );
};

export default PortfolioItem;
