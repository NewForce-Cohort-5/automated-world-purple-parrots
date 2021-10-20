import { useLandmark } from "./landmarksDataProvider.js";
import { Landmark } from "./landmarks.js";


export const LandmarkList = () => {

    const element = document.querySelector(".landmark-names")
    const landmarkZz = useLandmark()

    let landmarkHTMLPush = ""

    for (const singleLandmarkObject of landmarkZz) {
        landmarkHTMLPush += Landmark(singleLandmarkObject)
    }

element.innerHTML += `
<section class="bottom-list">
    <h2> Famous Landmarks </h2>
    <ul>
        ${landmarkHTMLPush}
    </ul>
</section>
`
}