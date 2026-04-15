export interface PokemonDetailsResponse {
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: number;
    height: number;
    weight: number;
    id: number;
    name: string;
    sprites: {
        front_default: string | null;
        [key: string]: any;
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
}

export interface BaseStatItem {
    name: string;
    value: number;
}
