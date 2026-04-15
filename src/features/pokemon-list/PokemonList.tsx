
import { useState } from "react";
import styles from "./PokemonList.module.scss"
import PageControlsView from "./components/page-controls-view/PageControlsView";
import InfiniteScrollView from "./components/infinite-scroll-view/InfiniteScrollView";
import Button from "@/shared/components/ui/button/Button";

const PokemonList = () => {

    const [view, setView] = useState<"page-controls" | "inf-scroll">("page-controls");

    return (
        <div id="page" className={styles.pokemonListPage}>
            <div id="container">
                <p className={styles.title} id="pageTitle">Pokedex</p>
                <p className="secondaryText" id="pageIntroText">Discover and explore Pokemon with {view === "page-controls" ? "Page Controls" : "Infinite Scroll"}</p>

                <div className={styles.actionButtonsHolder}>
                    <Button isActive={view === "page-controls"} caption="Page Controls" onClick={() => setView("page-controls")} />
                    <Button isActive={view === "inf-scroll"} caption="Infinite Scroll" onClick={() => setView("inf-scroll")} />
                </div>

                <div className={`contentHolder ${styles.viewHolder} `}>

                    {view === "page-controls" ? <PageControlsView /> : <InfiniteScrollView />}
                </div>
            </div>

        </div>
    )
}
export default PokemonList;