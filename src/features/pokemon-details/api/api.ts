import { http } from "@/shared/utils/http";
import type { PokemonDetailsResponse } from "../types/pokemon-details";

export const getPokemonDetails = (id: string | number) => {
    return http<PokemonDetailsResponse>(`/pokemon/${id}`);
};
