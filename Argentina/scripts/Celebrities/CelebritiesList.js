import { useCelebrity } from "./CelebritiesDataProvider.js"
import { countryCeleb } from "./Celebrities.js"

export const CelebList = () => {

    const contentElement = document.querySelector("#CelebList")
    const countryFunction = useCelebrity()

    let celebrityHTMLRepresentations =""
    for (const singleCelebrityObject of countryFunction) {
        celebrityHTMLRepresentations += countryCeleb(singleCelebrityObject)
    }
    contentElement.innerHTML += `
        <section id="CelebList"> <h2>Famous People</h2>
            <ul class="listofcelebs">
                <i>${celebrityHTMLRepresentations}
            </ul>
        </section>
    `
}

