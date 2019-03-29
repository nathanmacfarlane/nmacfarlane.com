import { connect } from "react-redux"
import React, { Component, Dispatch } from "react"
import { Action, getProjects } from "./Actions/RootAction"
import { State as RootState } from "./Reducers/index"
import { pages } from "./Sidebar"
import { Route } from "react-router"

export interface Props {
  selectedPage: string
}

export interface State {}

class Body extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <>
        <h1 style={{ fontSize: 35, fontFamily: "Gill Sans" }}>
          <b>{this.props.selectedPage}</b>
        </h1>
        {pages.map(page => (
          <Route path={page.url} component={page.component} />
        ))}
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    selectedPage: state.visibleBody.selectedPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {}
}

const ConnectedBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)

export default ConnectedBody
