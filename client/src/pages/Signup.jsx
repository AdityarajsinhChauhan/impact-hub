import { useState } from "react";
import { signup } from "../api";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    profession: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form className="z-50 w-[100vw] h-[100vh]" onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" required />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <input name="location" onChange={handleChange} placeholder="Location" required />
      <input name="profession" onChange={handleChange} placeholder="Profession" required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
