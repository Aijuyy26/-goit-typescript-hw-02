import { LoadMoreBtnProps } from "./LoadMoreBtn.types";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, loading }: LoadMoreBtnProps) => (
  <div className={styles.center}>
    <button
      className={styles.loadMoreBtn}
      onClick={onClick}
      disabled={loading}
    >
      {loading? "Loading..." : "Load More"}
    </button>
  </div>
);

export default LoadMoreBtn;