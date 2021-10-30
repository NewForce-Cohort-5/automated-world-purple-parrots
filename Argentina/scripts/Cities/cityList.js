import { useCity } from "./CityDataProvider.js";
import { countryCity } from "./City.js"

export const CityList = () => {

    const contentElement = document.querySelector("#CityList")
    const cities = useCity()

    let citiesHTMLRepresentations =""
    for (const singleCityObject of cities) {
        citiesHTMLRepresentations += countryCity(singleCityObject)
    }
    contentElement.innerHTML += `
        <section id="CityList"> <h2>Popular Cities</h2>
            <ul class="listofcities"> 
                <i>${citiesHTMLRepresentations}
            </ul>
        </section>
    `
}