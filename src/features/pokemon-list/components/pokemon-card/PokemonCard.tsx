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
            <img src={imageUrl} alt={name} loading="lazy" />
            <p>{name}</p>
            <p>#{id}</p>
        </div>
    );
};

export default PokemonCard;