import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/api";

export const usePokemonList = (page: number) => {
  const limit = 10;
  const offset = (page - 1) * limit;

  return useQuery({
    queryKey: ["pokemonList", page],
    queryFn: () => getPokemonList(limit, offset),
    placeholderData: keepPreviousData,

  });
};