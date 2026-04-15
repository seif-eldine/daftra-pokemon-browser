import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/api";

export const usePokemonList = (page: number, limit: number = 20) => {
  const offset = (page - 1) * limit;

  return useQuery({
    queryKey: ["pokemonList", page],
    queryFn: () => getPokemonList(limit, offset),
    placeholderData: keepPreviousData,

  });
};