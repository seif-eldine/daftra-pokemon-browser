import { createBrowserRouter } from "react-router";
import PokemonList from "@/features/pokemon-list/PokemonList";
import PokemonDetails from "@/features/pokemon-details/PokemonDetails";
// import NotFoundPage from "@/features/not-found";
import Layout from "@/layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        // errorElement: <NotFoundPage />,
        children: [
            { index: true, Component: PokemonList },
            { path: "pokemon/:id", Component: PokemonDetails },
        ],
    },
]);