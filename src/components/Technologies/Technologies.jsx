import { useInView } from "react-intersection-observer";

import TypeScriptIcon from "../TypeScriptIcon/TypeScriptIcon";
import SassIcon from "../SassIcon/SassIcon";
import JavaScriptIcon from "../JavaScriptIcon/JavaScriptIcon";
import WebpackIcon from "../WebpackIcon/WebpackIcon";
import HTMLIcon from "../HTMLIcon/HTMLIcon";
import GulpIcon from "../GulpIcon/GulpIcon";
import ViteIcon from "../ViteIcon/ViteIcon";
import CSSIcon from "../CSSIcon/CSSIcon";

import styles from "./Technologies.module.scss";
import cn from "classnames";

const Technologies = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={styles["technologies"]}>
      <h2 className={styles["technologies__title"]}>Technologies</h2>
      <div className={styles["technologies__list-wrapper"]}>
        <ul className={styles["technologies__list"]}>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--js"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <JavaScriptIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--ts"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <TypeScriptIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--vite"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <ViteIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--gulp"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <GulpIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--webpack"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <WebpackIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--sass"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <SassIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--css"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <CSSIcon inView={inView} />
          </li>
          <li
            className={cn(
              styles["technologies__item"],
              styles["technologies__item--html"],
              { [styles["technologies__item--animated"]]: inView }
            )}
          >
            <HTMLIcon inView={inView} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
