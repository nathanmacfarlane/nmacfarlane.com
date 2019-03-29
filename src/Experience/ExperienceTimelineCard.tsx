import React, { Component } from "react"
import TimeLineItem from "../Models/TimeLineItem"
import { List } from "antd"

import pin from "../Assets/Images/pin.png"

export interface State {}

export interface Props {
  item: TimeLineItem
}

class ExperienceTimelineCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <h2>{this.props.item.position}</h2>
        <h3>{this.props.item.company}</h3>
        <h4>
          <img src={pin} height={20} style={{ paddingRight: 10 }} />
          <span style={{ color: "gray" }}>
            <b>{this.props.item.location}</b>
          </span>
        </h4>
        <List
          size="small"
          dataSource={this.props.item.description}
          renderItem={(item: string) => <List.Item>{item}</List.Item>}
        />
      </>
    )
  }
}

export default ExperienceTimelineCard
