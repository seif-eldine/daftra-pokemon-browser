export const getStatLabel = (statName: string): string => {
    const labels: Record<string, string> = {
        hp: "HP",
        attack: "Attack",
        defense: "Defense",
        "special-attack": "Sp. Attack",
        "special-defense": "Sp. Defense",
        speed: "Speed",
    };
    return labels[statName] || statName.charAt(0).toUpperCase() + statName.slice(1);
};

export const capitalizeFirst = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatHeight = (heightInDecimeters: number): string => {
    const heightInMeters = heightInDecimeters / 10;
    return heightInMeters.toFixed(1);
};

export const formatWeight = (weightInHectograms: number): string => {
    const weightInKilograms = weightInHectograms / 10;
    return weightInKilograms.toFixed(1);
};
