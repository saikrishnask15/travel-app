import Hero from "../Hero";
import service from '../../assests/nature3.png'
import RecentTrips from "../RecentTrips";
const Service = () => {
    return ( 
       <>
       <Hero
       cName ="hero-mid section"
       heroImg = {service}
        title="Services"
       />
       <RecentTrips />
       </>
     );
}
 
export default Service;