
import {useContext, useState } from "react";
import { context } from "../ContextProvider";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const {login} = useContext(context);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        login(loginData.email, loginData.password);
        console.log("login Sucess");
    } catch (error) {
        console.log("login error");
    }
   
  }
  return (
    <div className="container Login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button>Login</button>
        <p>
          Don't have an account? <a href="/SignUp">Create account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
