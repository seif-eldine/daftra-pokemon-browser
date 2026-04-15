import { capitalizeFirst } from "../../utils/strings-utils";
import styles from "./Abilities.module.scss";

interface AbilitiesProps {
    abilities: {
        ability: {
            name: string;
        };
        is_hidden: boolean;
    }[];
}

const Abilities = ({ abilities }: AbilitiesProps) => {
    return (
        <div className={styles.abilitiesSection}>
            <h3 className={styles.sectionTitle}>Abilities</h3>
            <div className={styles.abilitiesList}>
                {abilities.map((ability) => (
                    <div key={ability.ability.name} className={styles.abilityWrapper}>
                        <span className={styles.abilityBadge}>
                            {capitalizeFirst(ability.ability.name)}
                        </span>
                        {ability.is_hidden && <span className={styles.hiddenLabel}>(hidden)</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Abilities;
