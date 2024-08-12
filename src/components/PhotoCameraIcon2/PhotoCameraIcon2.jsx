import styles from "./PhotoCameraIcon2.module.scss";
import cn from "classnames";

const PhotoCameraIcon2 = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--moving']] : inView})}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,8c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm0,11c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm7.5-15h-1.25l-2.25-3c-.47-.626-1.218-1-2-1h-4c-.782,0-1.53,.374-2,1l-2.25,3h-1.25C2.019,4,0,6.019,0,8.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V8.5c0-2.481-2.019-4.5-4.5-4.5ZM8.8,1.6c.282-.376,.73-.6,1.2-.6h4c.47,0,.918,.224,1.2,.6l1.8,2.4H7l1.8-2.4Zm14.2,17.9c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V8.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v11Z" />
    </svg>
  );
};

export default PhotoCameraIcon2;
