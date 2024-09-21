import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!signUpData.username || !signUpData.email || !signUpData.password) {
      toast.error("Please fill out all fields");
      return;
    }
    if (!validateEmail(signUpData.email)) {
      toast.error("Invalid email address");
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );

      const user = auth.currentUser;
      toast.success("Account Created Sucessfully!");
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          username: signUpData.username,
          email: user.email,
          password: signUpData.password,
        });
      }
      setSignUpData({
        username: "",
        email: "",
        password: "",
      });
      navigate('/Login');
    } catch (error) {
      console.log(error);
      toast.error("Error creating account. Please try again.");
    }
  };
  return (
    <div className="signup main container">
      <form onSubmit={handlesubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signUpData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleChange}
        />
        <button>Create Account</button>
        <p>
          Already have an account? <a href="/Login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
<div></div>;
