import styles from "./BaseExperience.module.scss";

interface BaseExperienceProps {
    baseExperience: number;
}

const BaseExperience = ({ baseExperience }: BaseExperienceProps) => {
    return (
        <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Base Experience</h3>
            <p className={styles.experienceValue}>{baseExperience} XP</p>
        </div>
    );
};

export default BaseExperience;
