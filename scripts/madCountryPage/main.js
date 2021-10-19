// import { landmark } from "./landmarks/landmarks.js"
import { useLandmark } from "./landmarks/landmarksDataProvider.js"
import { LandmarksList } from "./landmarks/landmarksList.js"

import { useCity } from "./cities/citiesDataProvider.js"
import { citiesList } from "./cities/citiesList.js"

import { useCeleb } from "./celebrities/celebritiesDataProvider.js"
import { celebritiesList} from "./celebrities/celebritiesList.js"

const allTheCities = useCity()

for (const city of allTheCities) {
    console.log(city)
}

citiesList()

const allTheLandmarks = useLandmark()

for (const landmark of allTheLandmarks) {
    console.log(landmark)
}

LandmarksList()

const allTheCelebs = useCeleb()

for (const celeb of allTheCelebs) {
    console.log(celeb)
}

celebritiesList()