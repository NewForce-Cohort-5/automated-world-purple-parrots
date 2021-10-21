import { useCity } from "./citiesDataProvider.js";
import { City } from "./cities.js";


export const CityList = () => {

    const element = document.querySelector(".cities")
    const cityZz = useCity()

    let cityHTMLPush = ""

    for (const singleCityObject of cityZz) {
        cityHTMLPush += City(singleCityObject)
    }

element.innerHTML += `
<section>
    <h2>Famous Cities</h2>
    <ul>
        ${cityHTMLPush}
    </ul>
</section>
`
}