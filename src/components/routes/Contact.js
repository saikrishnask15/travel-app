import Hero from "../Hero";
import contact from "../../assests/contact2.jpg";
import { useContext, useState } from "react";
import { context } from "../ContextProvider";
import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
    access_key: "b0e86aef-4d4b-45f3-9837-4160b11bc583",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const { user } = useContext(context);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      window.location.href = "/Login";
      return;
    }
    if (
      !formData.userName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Invalid email address");
      return;
    }
    const json = JSON.stringify(formData);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormData({
        userName: "",
        email: "",
        subject: "",
        message: "",
      })
    }
    setSuccessMessage("message has been sent!");
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
