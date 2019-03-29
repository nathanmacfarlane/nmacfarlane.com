import { connect } from "react-redux"
import React, { Component, Dispatch, ComponentClass } from "react"
import { Action, selectPage } from "./Actions/RootAction"
import { State as RootState } from "./Reducers/index"
import { Layout, Menu, Icon } from "antd"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ConnectedProjectsPage from "./Projects/ProjectsPage"
import About from "./About/About"

const { Sider } = Layout

export interface State {}

export interface Props {
  selectedPage: string
  selectPage: (page: string) => void
}

export type Page = {
  title: string
  icon: string
  url: string
  component: ComponentClass
}

export const pages: Page[] = [
  {
    title: "About Nathan",
    icon: "user",
    url: "/about",
    component: About
  },
  {
    title: "Projects",
    icon: "code",
    url: "/projects",
    component: ConnectedProjectsPage
  }
]

class Sidebar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  private clickedMenu = (menuItem: { key: string }) => {
    this.props.selectPage(menuItem.key)
  }

  render() {
    return (
      <Sider width={75} className="sidebar">
        <Menu
          mode="inline"
          inlineCollapsed={true}
          style={{ backgroundColor: "transparent", border: 0 }}
          defaultSelectedKeys={[pages[0].title]}
          onClick={this.clickedMenu}
        >
          {pages.map(page => (
            <Menu.Item key={page.title}>
              <Link to={page.url}>
                <Icon
                  className="icon"
                  style={{ fontSize: 20 }}
                  type={page.icon}
                />
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    selectedPage: state.visibleBody.selectedPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    selectPage: (page: string) => dispatch(selectPage(page))
  }
}

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default ConnectedSidebar
