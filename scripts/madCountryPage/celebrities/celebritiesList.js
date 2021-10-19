import { useCeleb } from "./celebritiesDataProvider.js"
import { celeb } from "./celebrities.js"


// TODO: Import `useFish` from the data provider module

export const celebritiesList = () => {

    // Get a reference to the `<article class="content">` element
    const contentPrint = document.querySelector(".citizens")
    const celebFunction = useCeleb()

    let celebHTMLRepresentations = ""
     for (const CelebObject of celebFunction) {

        celebHTMLRepresentations += celeb(CelebObject)
    }

    // Add to the existing HTML in the content element
    contentPrint.innerHTML += `<h2>Celebrities</h2>${celebHTMLRepresentations}`
}