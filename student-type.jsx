"use client"
import "./styles.css"

const StudentType = () => {
  const handleBack = () => {
    window.location.href = "/education-details"
  }

  const handleContinue = (type) => {
    // Store the selected type
    localStorage.setItem("studentType", type)
    // Navigate to next page
    window.location.href = "/class-stream"
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-title">What Kind Of Student Are You ?</h1>
          <p className="form-subtitle">Help us personalize your learning experience.</p>

          <div className="student-type-grid">
            <div className="student-type-card" onClick={() => handleContinue("coaching")}>
              <div className="icon-circle">
                <div className="icon coaching-icon"></div>
              </div>
              <span>Coaching Institute</span>
            </div>

            <div className="student-type-card" onClick={() => handleContinue("school")}>
              <div className="icon-circle">
                <div className="icon school-icon"></div>
              </div>
              <span>School</span>
            </div>

            <div className="student-type-card" onClick={() => handleContinue("independent")}>
              <div className="icon-circle">
                <div className="icon independent-icon"></div>
              </div>
              <span>Independent Learner</span>
            </div>

            <div className="student-type-card" onClick={() => handleContinue("college")}>
              <div className="icon-circle">
                <div className="icon college-icon"></div>
              </div>
              <span>College</span>
            </div>
          </div>

          <div className="button-group">
            <button className="btn-secondary" onClick={handleBack}>
              Back
            </button>
            <button className="btn-primary" onClick={() => handleContinue("default")}>
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
          <img src="/images/student-illustration.png" alt="Students learning" />
        </div>

        <div className="welcome-text">
          <h2>Welcome to AI Classroom!</h2>
          <p>Let's set up your personalized AI learning experience. It only takes 2 minutes!</p>
        </div>
      </div>
    </div>
  )
}

export default StudentType
