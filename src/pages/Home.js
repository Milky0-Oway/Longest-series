import './Home.css'
import AboutSection from "../infoblocks/Info/Info";
import Person from "../infoblocks/SeriesSm/Series_Sm";
import Developer from "../infoblocks/Creators/Developer";
export let id_day;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function Home() {
    id_day = getRandomInt(5);
    return (
        <div className = "HomePage">
            <Person/>
            <div className="info-section">
                <AboutSection/>
                <Developer/>
            </div>
        </div>
    )
}

export default Home