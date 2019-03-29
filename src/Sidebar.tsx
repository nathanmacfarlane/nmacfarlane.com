import { connect } from "react-redux"
import React, { Component, Dispatch, ComponentClass } from "react"
import { Action, selectPage } from "./Actions/RootAction"
import { State as RootState } from "./Reducers/index"
import { Layout, Menu, Icon } from "antd"
import { Link, withRouter } from "react-router-dom"
import ConnectedProjectsPage from "./Projects/ProjectsPage"
import Experience from "./Experience/Experience"

const { Sider } = Layout

export interface State {
  collapsed: boolean
}

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
    title: "Work Experience",
    icon: "user",
    url: "/experience",
    component: Experience
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
    this.state = {
      collapsed: true
    }
  }

  private loadData = (props: any) => {
    if (this.props.selectedPage != props.location.pathname) {
      if (props.location.pathname == "/") {
        this.props.selectPage(pages[0].url)
      } else {
        this.props.selectPage(props.location.pathname)
      }
    }
  }

  componentWillMount() {
    this.loadData(this.props)
  }

  componentWillReceiveProps(nextProps: Props) {
    this.loadData(nextProps)
  }

  private clickedMenu = (menuItem: { key: string }) => {
    this.props.selectPage(menuItem.key)
  }

  private mouseEnteredSidebar = () => {
    this.setState({ collapsed: false })
  }

  private mouseExitedSidebar = () => {
    this.setState({ collapsed: true })
  }

  render() {
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
    })
    return (
      <Sider
        onMouseLeave={this.mouseExitedSidebar}
        onMouseEnter={this.mouseEnteredSidebar}
        width={this.state.collapsed ? 75 : 200}
        className="sidebar"
      >
        <Menu
          mode="inline"
          style={{ backgroundColor: "transparent", border: 0 }}
          selectedKeys={[this.props.selectedPage]}
          onClick={this.clickedMenu}
        >
          {pages.map(page => (
            <Menu.Item key={page.url}>
              <Link to={page.url}>
                {/* <Icon
                  className="icon"
                  style={{ fontSize: 20 }}
                  type={page.icon}
                /> */}
                <IconFont type="briefcase" />
                {!this.state.collapsed && <span>{page.title}</span>}
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
    selectedPage: state.ui.selectedPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    selectPage: (page: string) => dispatch(selectPage(page))
  }
}

const ConnectedSidebar = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar) as React.ComponentType<any>)

export default ConnectedSidebar
