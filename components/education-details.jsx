"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "../styles.css"

const EducationDetails = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    board: "",
    language: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleBack = () => {
    router.push("/create-account")
  }

  const handleContinue = () => {
    // Navigate to next page
    router.push("/student-type")
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-title">Your Education Details</h1>
          <p className="form-subtitle">Tell us about your curriculum to personalize your content.</p>

          <div className="form-group mt-40">
            <label>Select Your Board</label>
            <div className="select-wrapper">
              <select name="board" value={formData.board} onChange={handleChange}>
                <option value="" disabled selected>
                  Choose Board
                </option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
                <option value="state">State Board</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-40">
            <label>Choose Your Medium Of Instruction</label>
            <div className="select-wrapper">
              <select name="language" value={formData.language} onChange={handleChange}>
                <option value="" disabled selected>
                  Select Your Language
                </option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
              </select>
            </div>
          </div>

          <div className="button-group">
            <button className="btn-secondary" onClick={handleBack}>
              Back
            </button>
            <button className="btn-primary" onClick={handleContinue}>
              Continue
            </button>
          </div>
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
          <img src="/images/education-illustration.png" alt="Education illustration" />
        </div>

        <div className="welcome-text">
          <h2>Welcome to AI Classroom!</h2>
          <p>Let's set up your personalized AI learning experience. It only takes 2 minutes!</p>
        </div>
      </div>
    </div>
  )
}

export default EducationDetails
