import DestinationData from "./DestinationData";
import ooty1 from "../assests/ooty1.jpg";
import ooty2 from "../assests/ooty-lake.jpg";
import kedar1 from '../assests/kedar1.jpg';
import kedar2 from '../assests/kedar2.jpg';
const Destination = () => {
  return (
    <div className="destination-ctn section container">
      <div className="destination-title">
        <h2>Popular destinations</h2>
        <p>Tours give you opportunity to see a lot, within a time farme.</p>
      </div>

      <DestinationData
        des_className="first-des"
        des_title="Ooty, Queen of the Nilgiris"
        des_description="The Blue Mountains have always been shrouded in mysticism, and Ooty is
          no exception to that. For every mountain lover, the very idea of
          travelling to the city known as the Queen of the Hills holds an allure
          like no other. Once regarded as the summer headquarters of the East
          India Company (and for a very good reason), Ooty, also known as
          Udagamandalam, is a hill station in Tamil Nadu which serves as a very
          popular tourist destination for anyone looking for a picturesque place
          to relax and unwind. Ooty is nestled amidst the Nilgiri hills at an
          altitude of 2,240 meters above sea level and enjoys a favourable
          climate all year round."
        // des_image_ctn="destination-images-ctn"
        img1={ooty1}
        img2={ooty2}
      />
      <DestinationData
        des_className="second-des"
        des_title="Kedarnath, Uttarakhand"
        des_description="Kedarnath one of the most sacred pilgrimage of Lord Shiva twelve Jyotirlingas,
        is situated in Rudraprayag district of Uttarakhand. 
        Kedarnath is one of the Chardhams and is situated at an altitude of 3586 mts,
        in the lap of the majestic mountain peaks and near the head of river Mandakini. 
        It is set amidst the stunning mountains cape of the Himalayas and at the head of the Mandakini River. 
        Kedar is another name of lord Shiva, the protector and the destroyer. 
        The temple is a 17km trek from Gaurikund. The ideal time for the pilgrimage to Kedarnath is from May to October.
        During the winters, the idols from Kedarnath and Madhyamaheshwar are brought to Ukhimath and worshipped there for six months. 
        The exquisite architecture Kedarnath temple is believed to be more than 1000 years old.
        The temple is built from evenly cut huge grey stones evoking wonders about the ancient craftsmanship."
        // des_image_ctn="destination-images-ctn-reverse"
        img1={kedar1}
        img2={kedar2}
      />
    </div>
  );
};

export default Destination;
