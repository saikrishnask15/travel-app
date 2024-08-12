import Hero from "../Hero";
import contact from "../../assests/contact2.jpg";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Add this line
    setSuccessMessage("message has been sent!")
    console.log(formData);
  };
  return (
    <>
      <Hero cName="hero-mid section" heroImg={contact} title="Contact" />
      <div className="contact-form container section">
        <h1>Send a message to us!</h1>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            cols={10}
            rows={4}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
          <p className="form-message">{successMessage}</p>
        </form>
      </div>
    </>
  );
};

export default Contact;
