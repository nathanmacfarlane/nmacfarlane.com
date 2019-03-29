import React, { Component, Dispatch } from "react"
import Project from "../Models/Project"

export interface Props {
  project: Project
}

export interface State {}

class ProjectDetail extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <>
        <p>
          <b>Lanuages:</b> {this.props.project.languages.join(", ")}
        </p>
        <p>
          <b>Platforms:</b> {this.props.project.platforms.join(", ")}
        </p>
        {this.props.project.description && (
          <p>
            <b>About:</b> {this.props.project.description}
          </p>
        )}
        {this.props.project.website && (
          <a href={"https://" + this.props.project.website}>
            {this.props.project.website}
          </a>
        )}
      </>
    )
  }
}

export default ProjectDetail
