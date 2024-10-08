import Hero from "../Hero";
import journey from "../../assests/journey.jpg";
import Destination from "../Destination";
import RecentTrips from "../RecentTrips";
const Home = () => {
  return (
    <>
      <Hero
        cName="hero section"
        heroImg={journey}
        title="Travel Far, Travel Wide"
        text="Choose Your favourite Destination."
        url="/Contact"
        btnClass="show"
        btnText="Travel plan"
      />
      <Destination />
      <RecentTrips/>
    </>
  );
};

export default Home;
