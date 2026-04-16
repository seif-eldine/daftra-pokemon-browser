
import { useNavigate, useParams } from "react-router";
import { usePokemonDetails } from "./hooks/usePokemonDetails";
import Button from "@/shared/components/ui/button/Button";
import Header from "./components/header/Header";
import BaseStats from "./components/BaseStats/BaseStats";
import Abilities from "./components/Abilities/Abilities";
import BaseExperience from "./components/BaseExperience/BaseExperience";
import Info from "./components/Info/Info";
import PokemonDetailsSkeleton from "./components/pokemon-details-skeleton/PokemonDetailsSkeleton";
import styles from "./PokemonDetails.module.scss";
import { capitalizeFirst } from "./utils/strings-utils";

const PokemonDetails = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, isLoading, isError } = usePokemonDetails(id!);

    if (isLoading || isError || !data) {
        return (
            <div id="page" className={styles.pokemonDetailsPage}>
                <div id="container">
                    <div id={styles.detailsCardContainer}>
                        <PokemonDetailsSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    const primaryType = data.types[0]?.type.name || "normal";

    return (
        <div id="page" className={styles.pokemonDetailsPage}>
            <div id="container">

                <div className={styles.buttonHolder}>

                    <Button caption="← Back to List" onClick={() => navigate("/")} />
                </div>

                <div className={styles.detailsCardContainer}>
                    <div className={styles.detailsContainer}>
                        <Header
                            name={data.name}
                            id={data.id}
                        />

                        <div className={styles.contentWrapper}>
                            <div className={styles.leftSection}>
                                <div>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={data.sprites.front_default || ""}
                                            alt={data.name}
                                            className={styles.pokemonImage}
                                        />
                                    </div>
                                    <div className={styles.categoryBadgeHolder}>
                                        <span className={styles.categoryBadge}>
                                            {capitalizeFirst(primaryType)}
                                        </span>
                                    </div>
                                </div>

                                <Info
                                    height={data.height}
                                    weight={data.weight}
                                />
                            </div>

                            <div className={styles.rightSection}>
                                <BaseStats stats={data.stats} />
                                <Abilities abilities={data.abilities} />
                                <BaseExperience baseExperience={data.base_experience} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PokemonDetails;