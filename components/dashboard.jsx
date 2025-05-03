"use client"

import "../styles.css"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="logo dashboard-logo">
            <div className="logo-icon"></div>
            <span>AI Classroom</span>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="feature-card small-card">
            <div className="feature-icon pdf-icon"></div>
            <div className="feature-text">
              <h3>PDF to Animations</h3>
              <p>Get AI explanations</p>
            </div>
          </div>

          <div className="streak-card">
            <h3>Your Learning Streak</h3>
            <div className="streak-content">
              <div className="streak-icon"></div>
              <div className="streak-days">5 days</div>
            </div>
            <p className="streak-message">Keep going! You're on your longest streak yet.</p>
            <div className="streak-progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <p className="milestone">Next milestone: 7-day streak (+50 coins)</p>
            </div>
          </div>

          <div className="feature-card notes-card">
            <div className="feature-icon video-icon"></div>
            <div className="feature-text">
              <h3>Generate Notes to Video</h3>
              <p>Convert your notes into videos</p>
            </div>
          </div>

          <div className="progress-card">
            <div className="progress-circle">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#7c4dff"
                  strokeWidth="10"
                  strokeDasharray="283"
                  strokeDashoffset="85"
                />
              </svg>
              <div className="progress-text">70%</div>
            </div>
            <div className="progress-label">
              <span className="dot"></span>
              <span>Completed: 70%</span>
            </div>
          </div>

          <div className="feature-card small-card">
            <div className="feature-icon topic-icon"></div>
            <div className="feature-text">
              <h3>Topic Based AI Video</h3>
              <p>Generate Videos On Any Topic</p>
            </div>
          </div>

          <div className="notes-card ai-notes">
            <div className="notes-header">
              <h3>AI Generated Notes</h3>
              <div className="lock-icon"></div>
            </div>
            <p>Notes for your reference</p>
          </div>

          <div className="chat-card">
            <div className="chat-header">
              <h3>Ask Your AI Mentor</h3>
              <div className="chat-controls">
                <span className="minimize"></span>
                <span className="expand"></span>
              </div>
            </div>
            <div className="chat-messages">
              <div className="message bot-message">
                <p>Hi, I am your ChatBot Mentor.</p>
              </div>
              <div className="message user-message">
                <p>I need your assistance...</p>
              </div>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type here about..." />
              <button className="send-button"></button>
            </div>
          </div>
        </div>

        <div className="dashboard-footer">
          <h1 className="footer-title">You're All Set To Go !!</h1>
          <p className="footer-subtitle">Explore AI Classroom and kickstart your learning journey.</p>
          <button className="start-learning-btn">Start Learning With AI Classroom</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
