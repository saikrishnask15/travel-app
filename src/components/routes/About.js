import Hero from "../Hero";
import nature from '../../assests/nature3.png'
const About = () => {
    return ( 
      <>
      <Hero
       cName="hero-mid" 
       heroImg = {nature}
       title = "About"
      />
      </>
     );
}
 
export default About;