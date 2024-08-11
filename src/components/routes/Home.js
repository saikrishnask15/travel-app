import Hero from "../Hero";

import journey from "../../assests/journey.jpg";
import Destination from "../Destination";
const Home = () => {
  return (
    <>
      <Hero
        cName="hero section"
        heroImg={journey}
        title="Your journey You Story"
        text="Choose Your favourite Destination."
        url="/"
        btnClass="show"
        btnText="Travel plan"
      />
      <Destination />
    </>
  );
};

export default Home;
