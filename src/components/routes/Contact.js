import Hero from "../Hero";
import contact from '../../assests/contact2.jpg'
const Contact = () => {
    return (  
        <>
        <Hero
        cName="hero-mid"
        heroImg = {contact}
        title="Contact"
        // text="Choose Your favourite Destination."
        // url="/"
        // btnClass="show"
        // btnText="Travel plan"
      />
        </>
    );
}
 
export default Contact;