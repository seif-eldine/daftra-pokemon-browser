import { createBrowserRouter } from "react-router";
import PokemonList from "@/features/pokemon-list/PokemonList";
import PokemonDetails from "@/features/pokemon-details/PokemonDetails";
import Layout from "@/layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: PokemonList },
            { path: "pokemon/:id", Component: PokemonDetails },
        ],
    },
]);