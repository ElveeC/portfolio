import styles from "./CameraIcon2.module.scss";
import cn from "classnames";

const CameraIcon2 = ({ inView }) => {
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
      <path d="m24,9.5l-4,3v-1c0-1.378-1.122-2.5-2.5-2.5h-.503c1.216-.913,2.003-2.366,2.003-4,0-2.757-2.243-5-5-5-1.977,0-3.689,1.153-4.5,2.822-.811-1.669-2.523-2.822-4.5-2.822C2.243,0,0,2.243,0,5c0,1.658.811,3.13,2.058,4.04-1.168.209-2.058,1.233-2.058,2.46v12.5h20v-4.5l4,3v-13ZM14,1c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm-2.997,8h-3.007c.635-.477,1.153-1.101,1.503-1.822.35.721.868,1.345,1.503,1.822ZM1,5C1,2.794,2.794,1,5,1s4,1.794,4,4-1.794,4-4,4S1,7.206,1,5Zm18,18H1v-11.5c0-.827.673-1.5,1.5-1.5h15c.827,0,1.5.673,1.5,1.5v11.5Zm4-2.5l-3-2.25v-4.5l3-2.25v9Z" />
    </svg>
  );
};

export default CameraIcon2;
