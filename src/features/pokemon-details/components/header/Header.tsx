import styles from "./Header.module.scss";

interface HeaderProps {
    name: string;
    id: number;
}

const Header = ({ name, id }: HeaderProps) => {

    return (
        <div className={styles.header}>
            <h1 className={styles.pokemonName}>{name}</h1>
            <p className={styles.pokemonId}>#{id.toString().padStart(3, "0")}</p>
        </div>
    );
};

export default Header;
