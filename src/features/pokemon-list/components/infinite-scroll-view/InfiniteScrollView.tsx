import { useEffect, useRef } from "react";
import { usePokemonInfinite } from "../../hooks/usePokemonInfinite";
import PokemonCard from "../pokemon-card/PokemonCard";
import styles from "./InfiniteScrollView.module.scss";
import Spinner from "@/shared/components/ui/spinner/Spinner";

const InfiniteScrollView = () => {
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = usePokemonInfinite();

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];

                if (
                    target.isIntersecting &&
                    hasNextPage &&
                    !isFetchingNextPage
                ) {
                    fetchNextPage();
                }
            },
            {
                root: null,
                rootMargin: "200px",
                threshold: 0,
            }
        );

        const el = loadMoreRef.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Error loading data</p>;

    return (
        <>
            <div className={styles.cardsHolder}>
                {data?.pages?.flatMap((page) => page.results).map((pokemon) => {

                    return (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            pokemonUrl={pokemon.url}
                        />
                    );
                })}
            </div>

            <div ref={loadMoreRef} />

            {isFetchingNextPage && <p className={styles.loadingSpan}><Spinner /> Loading more Pokemon...</p>}
        </>
    );
};

export default InfiniteScrollView;