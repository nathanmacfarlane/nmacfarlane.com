import { connect } from "react-redux"
import { Action, getTimelines } from "../Actions/RootAction"
import { State as RootState } from "../Reducers/index"
import { withRouter } from "react-router"
import React, { Component, Dispatch } from "react"
import { Icon } from "antd"
import TimeLineItem from "../Models/TimeLineItem"
import "./Experience.scss"

let {
  VerticalTimeline,
  VerticalTimelineElement
} = require("react-vertical-timeline-component")
import "react-vertical-timeline-component/style.min.css"
import ExperienceTimelineCard from "./ExperienceTimelineCard"

export interface Props {
  timeline: TimeLineItem[]
  getTimeline: () => void
}

export interface State {}

class Experience extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    if (this.props.timeline.length == 0) {
      this.props.getTimeline()
    }
  }
  render() {
    const timelineIcon = (icon: string) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon type={icon} style={{ padding: "50% 0px" }} />
      </div>
    )

    return (
      <>
        <VerticalTimeline>
          {this.props.timeline.map(item => (
            <VerticalTimelineElement
              date={item.date}
              iconStyle={{
                color: "white",
                backgroundColor: "rgb(33, 150, 243)",
                ...item
              }}
              icon={timelineIcon(item.icon)}
            >
              <ExperienceTimelineCard item={item} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    timeline: state.experience.timeline
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    getTimeline: () => dispatch(getTimelines())
  }
}

const ConnectedExperience = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience) as React.ComponentType<any>)

export default ConnectedExperience
