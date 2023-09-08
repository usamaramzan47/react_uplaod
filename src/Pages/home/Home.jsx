import Card from "../../Components/card/Card";
import Slider from "../../Components/slider/Slider";
import "./home.scss";

function Home() {
  return (
    <div className='home'>
        <Slider/>
        <Card/>
    </div>
  )
}

export default Home