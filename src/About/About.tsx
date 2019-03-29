import React, { Component } from "react"

export interface Props {}

export interface State {}

class About extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return <>about page</>
  }
}

export default About
