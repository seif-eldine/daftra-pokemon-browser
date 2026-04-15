import { getPokemonId, getPokemonImage } from "../../utils/pokemonCard";
import styles from "./PokemonCard.module.scss";

interface PokemonCardProps {
    name: string;
    pokemonUrl: string;
};

const PokemonCard = ({ name, pokemonUrl }: PokemonCardProps) => {
    const id = getPokemonId(pokemonUrl);
    const imageUrl = getPokemonImage(id);

    return (
        <div className={styles.pokemonCard}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={name} loading="lazy" />
            </div>
            <p className={styles.pokemonName}>{name}</p>
            <p className={styles.pokemonId}>#{id}</p>
        </div>
    );
};

export default PokemonCard;