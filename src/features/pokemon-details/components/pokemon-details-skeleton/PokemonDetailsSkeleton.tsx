import Skeleton from "@/shared/components/ui/skeleton/Skeleton";
import styles from "./PokemonDetailsSkeleton.module.scss";

const PokemonDetailsSkeleton = () => {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.headerSkeleton}>
                <Skeleton height={40} width="60%" className={styles.nameLineOne} />
            </div>

            <div className={styles.contentSkeleton}>
                <div className={styles.leftSectionSkeleton}>
                    <div className={styles.imageSkeleton}>
                        <Skeleton height={220} width={220} borderRadius="50%" />
                    </div>

                    <div className={styles.badgeSkeleton}>
                        <Skeleton height={28} width={100} borderRadius="20px" />
                    </div>

                    <div className={styles.infoSkeleton}>
                        <div className={styles.measurementItemSkeleton}>
                            <Skeleton height={24} width={24} borderRadius="4px" />
                            <div className={styles.measurementTextSkeleton}>
                                <Skeleton height={16} width={60} className={styles.marginBottom} />
                                <Skeleton height={20} width={80} />
                            </div>
                        </div>
                        <div className={styles.measurementItemSkeleton}>
                            <Skeleton height={24} width={24} borderRadius="4px" />
                            <div className={styles.measurementTextSkeleton}>
                                <Skeleton height={16} width={60} className={styles.marginBottom} />
                                <Skeleton height={20} width={80} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightSectionSkeleton}>
                    <div>
                        <Skeleton height={28} width={150} className={styles.marginBottom} />
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={styles.statItemSkeleton}>
                                <Skeleton height={16} width={100} className={styles.marginBottom} />
                                <div className={styles.statBarSkeleton}>
                                    <Skeleton height={8} width="70%" borderRadius="4px" />
                                    <Skeleton height={16} width={40} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.abilitiesSkeleton}>
                        <Skeleton height={28} width={120} className={styles.marginBottom} />
                        <div className={styles.abilityBadgesSkeleton}>
                            <Skeleton
                                height={32}
                                width={120}
                                borderRadius="20px"
                                className={styles.badgeItem}
                            />
                            <Skeleton
                                height={32}
                                width={140}
                                borderRadius="20px"
                                className={styles.badgeItem}
                            />
                            <Skeleton
                                height={32}
                                width={110}
                                borderRadius="20px"
                                className={styles.badgeItem}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PokemonDetailsSkeleton;
