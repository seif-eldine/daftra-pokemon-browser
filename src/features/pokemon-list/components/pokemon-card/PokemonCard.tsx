
import styles from "./PokemonCard.module.scss";

const PokemonCard = () => {
    return (
        <div className={`${styles.pokemonCard} ${styles.pokemonPic}`} >
            <img src="whatever" alt="pokemon pic" />
            <p>Pokemon Name</p>
            <p>Pokemon ID</p>
        </div>
    )
}

export default PokemonCard;