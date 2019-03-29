import { connect } from "react-redux"
import React, { Component, Dispatch } from "react"
import { Action, getProjects } from "../Actions/RootAction"
import { State as RootState } from "../Reducers/index"
import Project from "../Models/Project"
import ProjectCard from "../Projects/ProjectCard"
import { Modal } from "antd"
import ProjectDetail from "../Projects/ProjectDetail"

let StackGrid = require("react-stack-grid").default

export interface State {
  selectedProject?: Project
  projectVisible: boolean
}

export interface Props {
  projects: Project[]
  getProjects: () => void
}

class ProjectsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { projectVisible: false }
    this.props.getProjects()
  }

  private selectedProject = (project: Project) => {
    this.setState({ selectedProject: project, projectVisible: true })
  }

  render() {
    return (
      <>
        <Modal
          // centered={true}
          visible={this.state.projectVisible}
          onCancel={() => {
            this.setState({ projectVisible: false })
          }}
          title={
            this.state.selectedProject ? this.state.selectedProject.title : ""
          }
          footer={null}
        >
          {this.state.selectedProject && (
            <ProjectDetail project={this.state.selectedProject} />
          )}
        </Modal>
        <StackGrid
          gutterWidth={10}
          gutterHeight={10}
          monitorImagesLoaded={true}
          columnWidth={350}
        >
          {this.props.projects.map(project => (
            <ProjectCard
              project={project}
              selectedCard={this.selectedProject}
            />
          ))}
        </StackGrid>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    getProjects: () => dispatch(getProjects())
  }
}

const ConnectedProjectsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage)

export default ConnectedProjectsPage
