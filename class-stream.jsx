"use client"

import { useState } from "react"
import "./styles.css"

const ClassStream = () => {
  const [formData, setFormData] = useState({
    class: "",
    stream: "",
    subjects: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleStreamSelect = (stream) => {
    setFormData({
      ...formData,
      stream,
    })
  }

  const handleSubjectToggle = (subject) => {
    const subjects = [...formData.subjects]
    if (subjects.includes(subject)) {
      const index = subjects.indexOf(subject)
      subjects.splice(index, 1)
    } else {
      subjects.push(subject)
    }
    setFormData({
      ...formData,
      subjects,
    })
  }

  const handleBack = () => {
    window.location.href = "/student-type"
  }

  const handleContinue = () => {
    // Navigate to next page
    window.location.href = "/dashboard"
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-title">Your Class & Stream</h1>
          <p className="form-subtitle">Select your current class and academic stream</p>

          <div className="form-group mt-40">
            <label>Select Your Class</label>
            <div className="select-wrapper">
              <select name="class" value={formData.class} onChange={handleChange}>
                <option value="" disabled selected>
                  Choose Class
                </option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-40">
            <label>Select Stream</label>
            <div className="stream-options">
              <div
                className={`stream-option ${formData.stream === "science" ? "selected" : ""}`}
                onClick={() => handleStreamSelect("science")}
              >
                Science
              </div>
              <div
                className={`stream-option ${formData.stream === "commerce" ? "selected" : ""}`}
                onClick={() => handleStreamSelect("commerce")}
              >
                Commerce
              </div>
              <div
                className={`stream-option ${formData.stream === "arts" ? "selected" : ""}`}
                onClick={() => handleStreamSelect("arts")}
              >
                Arts
              </div>
            </div>
          </div>

          <div className="form-group mt-40">
            <label>
              Subject Interests <span className="optional">( Optional )</span>
            </label>
            <div className="subject-options">
              <div
                className={`subject-option ${formData.subjects.includes("physics") ? "selected" : ""}`}
                onClick={() => handleSubjectToggle("physics")}
              >
                Physics
              </div>
              <div
                className={`subject-option ${formData.subjects.includes("maths") ? "selected" : ""}`}
                onClick={() => handleSubjectToggle("maths")}
              >
                Maths
              </div>
              <div
                className={`subject-option ${formData.subjects.includes("chemistry") ? "selected" : ""}`}
                onClick={() => handleSubjectToggle("chemistry")}
              >
                Chemistry
              </div>
              <div
                className={`subject-option ${formData.subjects.includes("english") ? "selected" : ""}`}
                onClick={() => handleSubjectToggle("english")}
              >
                English
              </div>
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
          <img src="/images/class-stream-illustration.png" alt="Online learning" />
        </div>

        <div className="welcome-text">
          <h2>Welcome to AI Classroom!</h2>
          <p>Let's set up your personalized AI learning experience. It only takes 2 minutes!</p>
        </div>
      </div>
    </div>
  )
}

export default ClassStream
