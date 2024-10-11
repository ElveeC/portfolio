import styles from "./SearchIcon.module.scss";
import cn from "classnames";

const SearchIcon = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--moving']] : inView})}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.414,14h1.086c-.134,.321-.237,.656-.319,1h-1.181l-1-1H1v1.5c0,.827,.673,1.5,1.5,1.5h7.525c.026,.342,.079,.675,.156,1H2.5c-1.378,0-2.5-1.122-2.5-2.5v-2.5H2V0H22V13.055c-.285-.452-.617-.87-1-1.238V1H3V13h5.414l1,1Zm13.484,9.605l-3.605-3.605c-.77,.616-1.733,1-2.793,1-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5c0,1.06-.384,2.023-1,2.793l3.605,3.605-.707,.707Zm-2.898-7.105c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Z" />
    </svg>
  );
};

export default SearchIcon;