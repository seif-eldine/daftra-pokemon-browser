import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../api/api";
import type { PokemonDetailsResponse } from "../types/pokemon-details";

export const usePokemonDetails = (id: string | number) => {
    return useQuery<PokemonDetailsResponse>({
        queryKey: ["pokemonDetails", id],
        queryFn: () => getPokemonDetails(id),
    });
};
