import { useInView } from "react-intersection-observer";
import styles from "./PortfolioItem.module.scss";
import cn from 'classnames';

const PortfolioItem = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <li ref={ref} className={styles["porfolio__item"]}>
     
        <div className={styles["porfolio__item-inner"]}>
          <a className={styles["porfolio__link"]} href={item.link}>
            <h3 className={cn(styles['portfolio__item-title'], {[styles['portfolio__item-title--animated']] : inView})}>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.technologies}</p>
          </a>
        </div>
      
    </li>
  );
};

export default PortfolioItem;
