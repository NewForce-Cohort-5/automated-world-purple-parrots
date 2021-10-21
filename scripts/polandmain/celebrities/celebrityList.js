
 import { useCeleb } from "./celebrityDataProvider.js"
 import { Celeb } from "./celebrities.js"

 export const CelebList = () => {

     const contentElement = document.querySelector(".celebrity_name")
     const celebFunction = useCeleb()

     let celebrityHTMLRepresentations = ""
     for (const celebrityObject of celebFunction) {

               celebrityHTMLRepresentations += Celeb(celebrityObject)

     }

     contentElement.innerHTML += `
         <h2>Celebrity Name</h2>

         <article class="CelebrityList">
             ${celebrityHTMLRepresentations}
         </article>
     `
     }