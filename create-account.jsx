"use client"

import { useState } from "react"
import "./styles.css"

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Navigate to next page
    window.location.href = "/education-details"
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-title">Create Your Account</h1>
          <p className="form-subtitle">Join AI Classroom to start your personalized learning journey.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Create Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-checkbox">
              <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
              <span>
                I agree to the{" "}
                <a href="#" className="link">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="link">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button type="submit" className="btn-primary">
              Create My Account
            </button>
          </form>
        </div>
      </div>

      <div className="info-container">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-icon"></div>
            <span>AI Classroom</span>
          </div>
        </div>

        <div className="illustration">
          <img src="/images/computer-illustration.png" alt="Computer with learning tools" />
        </div>

        <div className="welcome-text">
          <h2>Welcome to AI Classroom!</h2>
          <p>Let's set up your personalized AI learning experience. It only takes 2 minutes!</p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
