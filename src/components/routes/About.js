import Hero from "../Hero";
import nature from "../../assests/nature3.png";
const About = () => {
  return (
    <>
      <Hero cName="hero-mid section" heroImg={nature} title="About" />
      <div className="about-container container section">
        <div>
          <h1>Our History</h1>
          <p>
            Founded on a passion for travel and exploration, our company was
            established in 2022 by Sk. With a vision to provide unique travel
            experiences, we have grown into a leading travel company, offering a
            wide range of trips to destinations around the world.
          </p>
        </div>
        <div>
          <h1>Our Mission</h1>
          <p>
            Our mission is to inspire people to travel, to explore, and to
            experience the beauty of our world. We strive to provide exceptional
            travel experiences that exceed our customers' expectations.
          </p>
        </div>
        <div>
          <h1>Our Values</h1>
          <ul>
            <li>
              We believe in the power of travel to transform lives and broaden
              perspectives.
            </li>
            <li>
              We are committed to providing exceptional customer service and
              ensuring that every trip is a memorable one.
            </li>
            <li>
              We strive to be responsible and sustainable in our operations,
              respecting the local cultures and environments of the destinations
              we visit.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
