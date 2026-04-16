import { useState } from "react";
import { usePokemonList } from "../../hooks/usePokemonPagination";
import PokemonCard from "../pokemon-card/PokemonCard";
import PokemonCardSkeleton from "../pokemon-card-skeleton/PokemonCardSkeleton";
import Paginator from "../paginator/Paginator";
import styles from "./PageControlsView.module.scss";

const LIMIT = 20;
const PageControlsView = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, refetch } = usePokemonList(page, LIMIT);

    if (isLoading) {
        return (
            <div className={styles.cardsHolder}>
                {Array.from({ length: LIMIT }).map((_, i) => (
                    <PokemonCardSkeleton key={`skeleton-${i}`} />
                ))}
            </div>
        );
    }

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

            <Paginator
                currentPage={page}
                totalCount={data?.count || 0}
                itemsPerPage={LIMIT}
                onPageChange={setPage}
            />

        </>
    );
};

export default PageControlsView;