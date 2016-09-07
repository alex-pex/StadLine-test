import React, {Component} from "react"
import ReactDOM from "react-dom"
import TopBar from "./Components/TopBar/TopBar.jsx"
import SideBar from "./Components/SideBar/SideBar.jsx"
import Conversation from "./Components/Conversation/Conversation.jsx"

import "./index.sass"

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SideBar />
        <section className="content">
          <Conversation />
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
