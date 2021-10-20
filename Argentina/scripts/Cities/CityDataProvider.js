const cityCollection = [
    {
        city: "Buenos Aires",
    }, {
        city: "Cordoba",
    }, {
        city: "Rosario",
    }, {
        city: "Puerto Madryn",
    }, {
        city: "Mendoza"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}