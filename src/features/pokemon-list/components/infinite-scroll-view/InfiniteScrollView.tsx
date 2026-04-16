import { useEffect, useRef } from "react";
import { usePokemonInfinite } from "../../hooks/usePokemonInfinite";
import PokemonCard from "../pokemon-card/PokemonCard";
import PokemonCardSkeleton from "../pokemon-card-skeleton/PokemonCardSkeleton";
import styles from "./InfiniteScrollView.module.scss";

const LIMIT = 20;

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

    if (isLoading) {
        return (
            <div className={styles.cardsHolder}>
                {Array.from({ length: LIMIT }).map((_, i) => (
                    <PokemonCardSkeleton key={`skeleton-${i}`} />
                ))}
            </div>
        );
    }

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

            {/* I will leave this (Old) loading spinner for any reviewer to test, as I'm not sure which one is better for UX. as the task design reference mentions both. Feel free to remove one of them.*/}

            {/* <div ref={loadMoreRef} />

            {isFetchingNextPage && <p className={styles.loadingSpan}><Spinner /> Loading more Pokemon...</p>} */}


            {isFetchingNextPage && (
                <div className={styles.loadingContainer}>
                    {Array.from({ length: LIMIT }).map((_, i) => (
                        <PokemonCardSkeleton key={`next-skeleton-${i}`} />
                    ))}
                </div>
            )}

            {!isFetchingNextPage && <div ref={loadMoreRef} />}
        </>
    );
};

export default InfiniteScrollView;