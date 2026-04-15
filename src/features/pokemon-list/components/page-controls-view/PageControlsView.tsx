import { useState } from "react";
import { usePokemonList } from "../../hooks/usePokemonPagination";
import PokemonCard from "../pokemon-card/PokemonCard";
import styles from "./PageControlsView.module.scss";

const PageControlsView = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, refetch } = usePokemonList(page);

    if (isLoading) return <p>Loading...</p>;

    if (isError)
        return (
            <div>
                Error loading data
                <button onClick={() => refetch()}>Retry</button>
            </div>
        );

    return (
        <>
            <div className={styles.cardsHolder}>
                {data?.results?.map((pokemon) => {

                    return (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            pokemonUrl={pokemon.url}
                        />
                    );
                })}
            </div>

            <div className="paginator">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>

                <span>Page {page}</span>

                <button onClick={() => setPage((p) => p + 1)}>
                    Next
                </button>
            </div>

        </>
    );
};

export default PageControlsView;