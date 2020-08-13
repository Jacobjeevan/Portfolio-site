import React, { Component } from "react";
import { getProjects } from "../actions/projects";

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
              <div className="cards" key={project._id}>
                <div className="card-head">{project.title}</div>
                <div className="card-info">
                  <p>{project.description}</p>
                </div>
                {project.link && (
                  <a className="card-link" href={project.link}>
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
