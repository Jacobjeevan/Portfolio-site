import React, { Component } from "react";
import { getProjects } from "../actions/projects";
import "./Projects.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    const projects = await getProjects();
    this.setState({
      projects,
    });
  }

  render() {
    return (
      <div>
        <div className="container pr-0 pl-0">
          <div className="cards-section">
            {this.state.projects.map((project) => (
              <div className="projects" key={project._id}>
                <div className="project-head">{project.title}</div>
                <div className="project-info">
                  <p>{project.description}</p>
                </div>
                {project.link && (
                  <a className="project-link" href={project.link}>
                    Link
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
