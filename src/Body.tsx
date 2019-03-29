import { connect } from "react-redux"
import React, { Component, Dispatch } from "react"
import { State as RootState } from "./Reducers/index"
import { pages } from "./Sidebar"
import { Route, Redirect } from "react-router"
import { withRouter } from "react-router-dom"

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
        <Route exact path="/" render={() => <Redirect to="/experience" />} />
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    selectedPage: state.ui.selectedPage
  }
}

const ConnectedBody = withRouter(connect(
  mapStateToProps,
  {}
)(Body) as React.ComponentType<any>)

export default ConnectedBody
