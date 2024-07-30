import TypeScriptIcon from "../TypeScriptIcon/TypeScriptIcon";
import SassIcon from "../SassIcon/SassIcon";
import JavaScriptIcon from "../JavaScriptIcon/JavaScriptIcon";
import WebpackIcon from "../WebpackIcon/WebpackIcon";
import HTMLIcon from "../HTMLIcon/HTMLIcon";
import GulpIcon from "../GulpIcon/GulpIcon";
import ViteIcon from "../ViteIcon/ViteIcon";
import CSSIcon from "../CSSIcon/CSSIcon";
import styles from "./IconsList.module.scss";
import cn from "classnames";

const IconsList = ({ inView }) => {
  return (
    <div className={styles.icons}>
      <ul className={styles["icons__list"]}>
        <li
          className={cn(styles["icons__item"], styles["icons__item--js"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <JavaScriptIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--ts"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <TypeScriptIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--vite"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <ViteIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--gulp"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <GulpIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--webpack"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <WebpackIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--sass"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <SassIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--css"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <CSSIcon inView={inView} />
        </li>
        <li
          className={cn(styles["icons__item"], styles["icons__item--html"], {
            [styles["icons__item--animated"]]: inView,
          })}
        >
          <HTMLIcon inView={inView} />
        </li>
      </ul>
    </div>
  );
};

export default IconsList;
