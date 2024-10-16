import styles from "./StudentIcon.module.scss";
import cn from "classnames";

const StudentIcon = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--moving']] : inView})}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m20,21v3h-1v-3c0-1.654-1.346-3-3-3h-8c-1.654,0-3,1.346-3,3v3h-1v-3c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4Zm2-16.5v7.5h-1v-7.016l-3,1.492v2.524c0,3.309-2.691,6-6,6s-6-2.691-6-6v-2.524l-3.973-1.976L10.311.379c1.008-.501,2.365-.502,3.376-.001l8.285,4.122h.027Zm-5,2.473l-3.312,1.647c-.505.251-1.097.377-1.688.377s-1.184-.125-1.688-.377l-3.312-1.647v2.026c0,2.757,2.243,5,5,5s5-2.243,5-5v-2.027Zm2.728-2.473l-6.484-3.226c-.733-.362-1.756-.363-2.487,0l-6.484,3.225,6.484,3.226c.732.364,1.754.364,2.486,0l6.485-3.226Z" />
    </svg>
  );
};

export default StudentIcon;
