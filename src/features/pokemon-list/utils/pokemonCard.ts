export const getPokemonId = (url: string) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
};

export const getPokemonImage = (id: string | number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;