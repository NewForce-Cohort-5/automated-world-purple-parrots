import { useLandmark } from "./LandmarkDataProvider.js";
import { countryLandmark } from "./Landmarks.js";

export const LandmarkList = () => {

    const contentElement = document.querySelector("#LandmarkList")
    const landmarkFunction = useLandmark()

    let landmarksHTMLRepresentations =""
    for (const singleLandmarkObject of landmarkFunction) {
        landmarksHTMLRepresentations += countryLandmark(singleLandmarkObject)
    }
    contentElement.innerHTML += `
        <section id="LandmarkList"> <h2>Famous Landmarks</h2>
            <ul class="listoflandmarks">
                <i>${landmarksHTMLRepresentations}
            </ul>
        </section>
    `
}

// landmarksHTMLRepresentations += 
// countryLandmark(useLandmark)
// contentElement.innerHTML += `<h1>hello`