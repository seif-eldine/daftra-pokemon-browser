import { formatHeight, formatWeight } from "../../utils/strings-utils";
import styles from "./Info.module.scss";

interface InfoProps {
    height: number;
    weight: number;
}

const Info = ({
    height,
    weight,
}: InfoProps) => {
    return (
        <div className={styles.infoSection}>
            <div className={styles.measurements}>
                <div className={styles.measurementItem}>
                    <div className={styles.measurementIcon}>📏</div>
                    <div>
                        <p className={styles.measurementLabel}>Height</p>
                        <p className={styles.measurementValue}>
                            {formatHeight(height)} m
                        </p>
                    </div>
                </div>
                <div className={styles.measurementItem}>
                    <div className={styles.measurementIcon}>⚖️</div>
                    <div>
                        <p className={styles.measurementLabel}>Weight</p>
                        <p className={styles.measurementValue}>
                            {formatWeight(weight)} kg
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
