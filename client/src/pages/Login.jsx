import { useState } from "react";
import { login } from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      alert("Login successful!");
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form className="z-50 w-[100vw] h-[100vh" onSubmit={handleSubmit}>
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
