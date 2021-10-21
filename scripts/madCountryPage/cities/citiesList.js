import { useCity } from "./citiesDataProvider.js"
import { city } from "./cities.js"


// TODO: Import `useFish` from the data provider module

export const citiesList = () => {

    // Get a reference to the `<article class="content">` element
    const contentPrint = document.querySelector(".cities")
    const cityFunction = useCity()

    let cityHTMLRepresentations = ""
     for (const CityObject of cityFunction) {

        cityHTMLRepresentations += city(CityObject)
    }

    // Add to the existing HTML in the content element
    contentPrint.innerHTML += `<h2>Cities</h2><ul>${cityHTMLRepresentations}</ul>`
}


