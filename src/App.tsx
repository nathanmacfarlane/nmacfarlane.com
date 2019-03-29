import React, { Component } from "react"
import { Layout, Icon } from "antd"
import "antd/dist/antd.css"
import "./App.scss"
import Firestore from "./Firestore"
import ConnectedSidebar from "./Sidebar"
import { BrowserRouter as Router } from "react-router-dom"
import ConnectedBody from "./Body"

const { Footer, Content } = Layout

class App extends Component {
  constructor() {
    super({})
    // init connection to firestore
    const _ = new Firestore()
  }
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <ConnectedSidebar />
          <Layout>
            <Content className="body">
              <ConnectedBody />
            </Content>
            <Footer style={{ height: "40px", marginBottom: "10px" }}>
              <Icon type="copyright" />
              &nbsp;Nathan Macfarlane
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App
