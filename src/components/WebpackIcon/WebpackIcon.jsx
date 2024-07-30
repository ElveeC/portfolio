import styles from "./WebpackIcon.module.scss";
import cn from "classnames";

const WebpackIcon = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--animated']] : inView})}
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="256" height="256" rx="60" fill="#F4F2ED" />
      <path
        className={styles['icon__path1']}
        d="M208.082 179.205L131.43 222.563V188.793L179.188 162.522L208.082 179.205ZM213.325 174.457V83.7798L185.275 99.9682V158.25L213.325 174.457ZM48.05 179.205L124.702 222.563V188.793L76.9433 162.522L48.05 179.205V179.205ZM42.8066 174.457V83.7798L70.8566 99.9682V158.25L42.8066 174.457V174.457ZM46.0883 77.9132L124.702 33.4365V66.0882L74.34 93.7899L73.955 94.0099L46.0883 77.9132V77.9132ZM210.043 77.9132L131.43 33.4365V66.0882L181.792 93.7899L182.177 94.0099L210.043 77.9132V77.9132Z"
        fill="currentColor"
      />
      <path
        className={styles['icon__path2']}
        d="M124.702 181.111L77.585 155.206V103.873L124.702 131.08V181.111ZM131.43 181.111L178.547 155.206V103.873L131.43 131.08V181.111ZM80.775 97.933L128.075 71.918L175.375 97.933L128.075 125.25L80.775 97.933V97.933Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WebpackIcon;
