import styles from "./BookIcon.module.scss";
import cn from "classnames";

const BookIcon = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--moving']] : inView})}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="512"
      height="512"
      fill="currentColor"
    >
      <path d="M20.5,0H4.5c-1.38,0-2.5,1.12-2.5,2.5V21.5c0,1.38,1.12,2.5,2.5,2.5H22V1.5c0-.83-.67-1.5-1.5-1.5Zm.5,1.5V19H7V1h13.5c.28,0,.5,.22,.5,.5ZM4.5,1h1.5V19h-1.5c-.56,0-1.08,.19-1.5,.5V2.5c0-.83,.67-1.5,1.5-1.5Zm0,22c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H21v3H4.5Zm5.68-8l.98-3h5.58l1.1,3h1.06l-3.17-8.67c-.29-.8-1.03-1.33-1.88-1.33s-1.59,.52-1.88,1.33l-2.85,8.67h1.07Zm2.73-8.34c.14-.4,.51-.66,.94-.66s.8,.26,.94,.66l1.59,4.34h-4.89l1.42-4.34Z" />
    </svg>
  );
};

export default BookIcon;
