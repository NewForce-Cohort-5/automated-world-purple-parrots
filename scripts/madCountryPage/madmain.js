// import { landmark } from "./landmarks/landmarks.js"
import { useLandmark } from "./landmarks/landmarksDataProvider.js"
import { LandmarksList } from "./landmarks/landmarksList.js"

import { useCity } from "./cities/citiesDataProvider.js"
import { citiesList } from "./cities/citiesList.js"

import { useCeleb } from "./celebrities/celebritiesDataProvider.js"
import { celebritiesList} from "./celebrities/celebritiesList.js"

import { navBar, footer, logo } from "/Argentina/scripts/navbar/navbar.js"

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


//image on mad.html
const mad = () => { document.querySelector(".images").innerHTML = `
<div class="">
                    
                <a href="mad.html"><img src="https://www.telegraph.co.uk/content/dam/Travel/2017/june/cycling%20131314241_Cultura%20Exclusive_Madagascar-xlarge.jpg?imwidth=640" alt="trees in Madagaskar"  class="img"></a>  
            
`
}
 
mad()
celebritiesList()
logo()
navBar()
footer()