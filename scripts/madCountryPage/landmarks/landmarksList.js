import { useLandmark } from "./landmarksDataProvider.js"
import { landmark } from "./landmarks.js"


// TODO: Import `useFish` from the data provider module

export const LandmarksList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".landmarks")
    const landmarkFunction = useLandmark()

    let landmarkHTMLRepresentations = ""
     for (const landmarkObject of landmarkFunction) {

        landmarkHTMLRepresentations += landmark(landmarkObject)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `<h2>Landmarks</h2><ul>${landmarkHTMLRepresentations}</ul>`
}