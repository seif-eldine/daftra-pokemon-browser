import { getStatLabel } from "../../utils/strings-utils";
import styles from "./BaseStats.module.scss";

interface BaseStatsProps {
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

const BaseStats = ({ stats }: BaseStatsProps) => {
    const maxStatValue = 100;

    return (
        <div className={styles.baseStats}>
            <h2 className={styles.sectionTitle}>Base Stats</h2>
            <div className={styles.statsContainer}>
                {stats.map((stat) => (
                    <div key={stat.stat.name} className={styles.statItem}>
                        <label className={styles.statLabel}>
                            {getStatLabel(stat.stat.name)}
                        </label>
                        <div className={styles.statContent}>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: `${Math.min(
                                            (stat.base_stat / maxStatValue) * 100,
                                            100
                                        )}%`,
                                    }}
                                />
                            </div>
                            <span className={styles.statValue}>{stat.base_stat}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BaseStats;
