import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ShakerTableOutput.module.css";

const ShakerTableOutput = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.shakerTableOutput}>
      <img
        className={styles.shakeTableJpeg}
        alt=""
        src="/shake-table-jpeg@2x.png"
      />
      <div className={styles.frame} onClick={onFrameContainerClick}>
        <div className={styles.backToHomePageWrapper}>
          <b className={styles.backToHome}>Back to Home Page</b>
        </div>
      </div>
      <div className={styles.shakerTableOutputChild} />
      <img
        className={styles.shakerTableOutputItem}
        alt=""
        src="/rectangle-40.svg"
      />
      <img className={styles.waves1Icon} alt="" src="./assets/5.png" />
    </div>
  );
};

export default ShakerTableOutput;
