
 import { useCity } from "./citiesDataProvider.js"
 import { City } from "./city.js"

 export const CityList = () => {

     const contentElement = document.querySelector(".city_name")
     const cityFunction = useCity()

     let cityHTMLRepresentations = ""
     for (const cityObject of cityFunction) {

               cityHTMLRepresentations += City(cityObject)

     }

     contentElement.innerHTML += `
        <h2>City List</h2>
         <article class="cityList">
             ${cityHTMLRepresentations}
         </article>
     `
 }