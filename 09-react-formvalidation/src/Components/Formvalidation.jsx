import React from 'react'
import './Formvalidation.css'
import { useState } from 'react';

const Formvalidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [borderColors, setBorderColors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function validate(e) {
    e.preventDefault();
    const newErrors = {};
    const newColors = {};

    // Username validation
    if (formData.username.length > 8) {
      newColors.username = "green";
    } else {
      newErrors.username = "Username must be 8 letters long.";
      newColors.username = "red";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (emailRegex.test(formData.email)) {
      newColors.email = "green";
    } else {
      newErrors.email = "Email should have @gmail.com";
      newColors.email = "red";
    }

    // Password validation
    if (formData.password.length > 8) {
      newColors.password = "green";
    } else {
      newErrors.password = "Password should be 8 letters long";
      newColors.password = "red";
    }

    // Confirm password validation
    if (formData.password !== "" && formData.password === formData.confirmPassword) {
      newColors.confirmPassword = "green";
    } else {
      newErrors.confirmPassword = "Passwords didn't match.";
      newColors.confirmPassword = "red";
    }

    setErrors(newErrors);
    setBorderColors(newColors);

    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!", formData);
      alert("Registration successful!");
      // Reset form
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      setBorderColors({});
    }
  }

  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Name"
          style={{ borderColor: borderColors.username }}
          value={formData.username}
          onChange={handleChange}
          autoComplete='username'
        />
        <p className="error">{errors.username}</p>

        <input
          type="text"
          name="email"
          placeholder="Email"
          style={{ borderColor: borderColors.email }}
          value={formData.email}
          autoComplete='email'
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ borderColor: borderColors.password }}
          value={formData.password}
          autoComplete='password'
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          style={{ borderColor: borderColors.confirmPassword }}
          autoComplete='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Formvalidation
