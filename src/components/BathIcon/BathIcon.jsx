import styles from "./BathIcon.module.scss";
import cn from "classnames";

const BathIcon = ({ inView }) => {
  return (
    <svg
      className={cn(styles.icon, {[styles['icon--moving']] : inView})}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m1,12V3.833c0-1.562,1.271-2.833,2.833-2.833.782,0,1.534.33,2.066.895l-.912,4.686,1.364,1.86,6.563-4.922-1.258-1.854-4.822-.215c-.724-.91-1.838-1.451-3.003-1.451C1.72,0,0,1.72,0,3.833v8.167h0l.452,3.617c.289,2.31,1.502,4.307,3.239,5.64l-.75,2.743h1.03l.594-2.154c1.254.735,2.709,1.154,4.25,1.154h6.377c1.537,0,2.99-.417,4.242-1.149l.592,2.149h1.03l-.748-2.737c1.741-1.333,2.958-3.333,3.247-5.646l.452-3.617H1ZM6.81,2.45l4.303.192.439.648-4.991,3.744-.509-.692.758-3.893Zm15.755,13.042c-.464,3.71-3.633,6.508-7.371,6.508h-6.377c-3.738,0-6.907-2.798-7.371-6.508l-.312-2.492h21.742l-.312,2.492Z" />
    </svg>
  );
};

export default BathIcon;
