import Skeleton from "@/shared/components/ui/skeleton/Skeleton";
import styles from "./PokemonCardSkeleton.module.scss";

const PokemonCardSkeleton = () => {
    return (
        <div className={styles.pokemonCardSkeleton}>
            <div className={styles.imageContainerSkeleton}>
                <Skeleton height="100%" width="100%" />
            </div>
            <div className={styles.textSkeleton}>
                <Skeleton height={20} width="80%" className={styles.nameSkeleton} />
                <Skeleton height={16} width="60%" />
            </div>
        </div>
    );
};

export default PokemonCardSkeleton;
