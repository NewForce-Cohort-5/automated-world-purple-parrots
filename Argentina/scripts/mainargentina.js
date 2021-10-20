import { useCelebrity } from "./Celebrities/CelebritiesDataProvider.js";
import { CelebList } from "./Celebrities/CelebritiesList.js";
import { useCity } from "./Cities/CityDataProvider.js";
import { CityList } from "./Cities/cityList.js";
import { useLandmark } from "./Landmarks/LandmarkDataProvider.js";
import { LandmarkList } from "./Landmarks/LandmarksList.js";
import { navBar, footer, logo } from "./navbar/navbar.js";


const allTheCelebs = useCelebrity()

for (const celeb of allTheCelebs){
    console.log(celeb)
}

CelebList()

const allTheCities = useCity()

    for (const cities of allTheCities){
        console.log(cities)
    }

CityList()

const allTheLandmarks = useLandmark()

for (const landmark of allTheLandmarks){
    console.log(location)
}

LandmarkList()
navBar()
footer()
logo()

