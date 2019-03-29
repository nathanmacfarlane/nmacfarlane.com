import React, { Component } from "react"
import Project from "../Models/Project"
import { Card } from "antd"

const { Meta } = Card

export interface State {
  loading: boolean
}

export interface Props {
  project: Project
  selectedCard: (project: Project) => void
}

class ProjectCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  private imageOnLoad = () => {
    this.setState({ loading: false })
  }

  private selectedCard = () => {
    this.props.selectedCard(this.props.project)
  }

  render() {
    return (
      <>
        <Card
          onClick={this.selectedCard}
          hoverable={true}
          cover={
            <img
              onLoad={this.imageOnLoad}
              alt={this.props.project.title}
              src={this.props.project.imageUrl}
            />
          }
          loading={this.state.loading}
        >
          <Meta
            title={this.props.project.title}
            description={this.props.project.languages.join(", ")}
          />
        </Card>
      </>
    )
  }
}

export default ProjectCard
