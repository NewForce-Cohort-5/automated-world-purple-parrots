const landmarkCollection = [
    {
        site: "Monte Leon National Park",
    }, {
        site: "The Obelisk of Buenos Aires",
    }, {
        site: "Mendoza's Wineries",
    }, {
        site: "Mount Aconcagua",
    }, {
        site: "The Rainbow Mountains"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}