import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container pr-0 pl-0">
        <div className="section">
          <div className="welcome">
            <h4>Hey there!</h4>
            <p>
              My name is Jacob Jeevan. I am a recent CS graduate, currently
              looking for SWE/SDE roles. This is my portfolio website built
              using HTML, Bootstrap and an extra bit of CSS. Take a look around
              and if you would like to connect, email me at jjjeevan @ uab dot
              edu.
            </p>
          </div>
        </div>
      </div>

      <div className="container  pl-0 pr-0">
        <div className="section">
          <div className="section-header">Experience</div>
          <div className="section-content">
            <h4>Bioinformatics Institute</h4>
            <ul>
              <li>
                Reduced simulation execution time by 12% through parallel
                processing in MATLAB.
              </li>
              <li>
                Preprocessed single-cell data using dimensionality reduction
                techniques such as PCA and tSNE.
              </li>
              <li>
                Prepared software package for Polar GINI Curve research paper.
                https://bit.ly/2D7z8eZ
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container  pl-0 pr-0">
        <div className="section">
          <div className="section-header">Education</div>
          <div className="section-content">
            <h4>University of Alabama at Birmingham</h4>
            <h5>Master of Science in Computer Science </h5>
            <br />
            <h4>Georgia Institute of Technology</h4>
            <h5>Bachelor of Science in Nuclear and Radiological Engineering</h5>
          </div>
        </div>
      </div>

      <div className="container  pl-0 pr-0">
        <div className="section">
          <div className="section-header">Skills</div>
          <div className="section-content">
            <div className="skills-container">
              <div className="skills">
                Languages
                <div className="skills-desc">
                  Proficient: Java, Python, SQL
                  <br />
                  Familiar: C++, CSS, HTML, Javascript, Matlab
                </div>
              </div>
            </div>

            <div className="skills-container">
              <div className="skills">
                Libraries
                <div className="skills-desc">
                  Mongoose, Numpy, Pandas, React.js, Scikit-Learn
                </div>
              </div>
            </div>

            <div className="skills-container">
              <div className="skills">
                Frameworks
                <div className="skills-desc">
                  Django, Express, ElectronJS, Node.js
                </div>
              </div>
            </div>

            <div className="skills-container">
              <div className="skills">
                Databases
                <div className="skills-desc">MongoDB, PostgreSQL</div>
              </div>
            </div>

            <div className="skills-container">
              <div className="skills">
                Tools
                <div className="skills-desc">
                  Bash, Bootstrap, Git, Postman, WordPress
                </div>
              </div>
            </div>

            <div className="skills-container">
              <div className="skills">
                Methodologies
                <div className="skills-desc">CRUD, MVC, OOP, RESTful, TDD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
