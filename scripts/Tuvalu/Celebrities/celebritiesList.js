import { useCeleb } from "./celebritiesDataProvider.js";
import { Celeb } from "./Celebrities.js";


export const CelebList = () => {

    const element = document.querySelector(".celeb-names")
    const celebZz = useCeleb()

    let celebHTMLPush = ""

    for (const singleCelebObject of celebZz) {
        celebHTMLPush += Celeb(singleCelebObject)
    }

element.innerHTML += `
<section>
    <h2>Famous Celebrities</h2>
    <ul>
        ${celebHTMLPush}
    </ul>
</section>
`
}