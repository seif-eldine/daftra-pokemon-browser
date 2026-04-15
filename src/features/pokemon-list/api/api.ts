
import { http } from "@/shared/utils/http";
import type { PokemonListResponse } from "../types/pokemon";


export const getPokemonList = (limit: number, offset: number) => {
    return http<PokemonListResponse>(
        `/pokemon?limit=${limit}&offset=${offset}`
    );
};

