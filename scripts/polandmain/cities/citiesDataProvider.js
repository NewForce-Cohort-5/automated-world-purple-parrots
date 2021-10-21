const cityCollection = [
    {
        cityName: "Warsaw",

    },
    {
        cityName: "Krakow",

    },
    {
        cityName: "Gdansk",

    }

]

// This is new code. Add this.
export const useCity = () => {
    return cityCollection.slice()
}






