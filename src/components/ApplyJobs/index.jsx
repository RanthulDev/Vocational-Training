import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const ApplyJobs = () => {
  const navigate=useNavigate();
  const [name,setName]=useState("")
  const OnformSubmit=()=>{
    if(name==="" ){
      alert("Please fill the name first")
    }
else{
    alert("Your Job Application has been Applied Successfully")
    navigate("/Jobs")

}
  }
  const courseDetails = {
    title: "Web Development",
    description: "Learn to build dynamic websites using modern web technologies.",
    duration: "3 Months",
    companyName: "Tech Academy",
    nvqLevel: "Level 3",
    startDate: "2024-01-15"
  };
  const handleApplyClick = () => {
    // Navigate to the job application page
    navigate("/Jobs");
  };
  return (
    <div className="apply-job">
      <div className="container">
        <div>
        <header className="header">
          <h1 className="post-job">Details About Courses </h1>
        </header>
        <div className="course-details">
          <h2>{courseDetails.title}</h2>
          <p><strong>Description:</strong> {courseDetails.description}</p>
          <p><strong>Duration:</strong> {courseDetails.duration}</p>
          <p><strong>Company Name:</strong> {courseDetails.companyName}</p>
          <p><strong>NVQ Level:</strong> {courseDetails.nvqLevel}</p>
          <p><strong>Start Date:</strong> {new Date(courseDetails.startDate).toLocaleDateString()}</p>
        </div>

        {/* Button to Apply for the Job */}
        <div className="form-group">
          <button className="apply-button" onClick={handleApplyClick}>
            Apply for this Course
          </button>
        </div>
        </div>

        <header className="header">
          <h1 className="post-job">Fill the form </h1>
        </header>
        <form>
          <div className="form-group">
            <label id="name-label" for="name">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Upload Your Resume
            </label>
            <label>
              <input type="file" id="myFile" name="filename" required />
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={OnformSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyJobs;
