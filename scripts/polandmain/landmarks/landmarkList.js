
 import { useLandmark } from "./landmarkDataProvider.js"
 import { Landmark } from "./landmark.js"

 export const landmarkList = () => {

     const contentElement = document.querySelector(".landmark_name")
     const landmarkFunction = useLandmark()

     let landmarkHTMLRepresentations = ""
     for (const landmarkObject of landmarkFunction) {
 
               landmarkHTMLRepresentations += Landmark(landmarkObject)

     }

     contentElement.innerHTML += `
         <h2>Landmark Name</h2>

         <article class="landmark_list">
             ${landmarkHTMLRepresentations}
         </article>
     `
 }