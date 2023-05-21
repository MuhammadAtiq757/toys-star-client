import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Tabular from "../Tabular/Tabular";
import Upcoming from "../Upcoming/Upcoming";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Gallery></Gallery>
           <Tabular></Tabular>
           <Upcoming></Upcoming>
            <About></About>
            
        </div>
    );
};

export default Home;