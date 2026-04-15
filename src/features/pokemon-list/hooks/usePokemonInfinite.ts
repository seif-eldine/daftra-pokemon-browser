import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/api";

export const usePokemonInfinite = () => {
    return useInfiniteQuery({
        queryKey: ["pokemonInfiniteScroll"],
        queryFn: ({ pageParam = 0 }) =>
            getPokemonList(10, pageParam),

        initialPageParam: 0,

        getNextPageParam: (lastPage) => {
            if (!lastPage.next) return undefined;

            const url = new URL(lastPage.next);
            const offset = url.searchParams.get("offset");

            return offset ? Number(offset) : undefined;
        },
    });
};