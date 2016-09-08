import React, {Component} from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from "react-router"

import TopBar from "./Components/TopBar/TopBar.jsx"
import SideBar from "./Components/SideBar/SideBar.jsx"
import Issue from "./Components/Issue/Issue.jsx"

import "./index.sass"

let App = class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  getChildContext() {
    return {
      setTitle: (title) => this.setTitle(title)
    }
  }

  setTitle(title) {
    this.setState({
      title: title
    })
  }

  render() {
    return (
      <div>
        <TopBar title={this.state.title} />
        <SideBar />
        <section className="content">
          { this.props.children }
        </section>
      </div>
    )
  }
}

App.childContextTypes = {
  setTitle: React.PropTypes.func,
}

let routes = (
  <Router history={hashHistory}>
    <Route name="app" path="/" component={App}>
      <Route name="issue" path="/:user/:repo/issues/:number" component={Issue}/>
    </Route>
  </Router>
)

// ReactDOM.render(routes, function(Handler) {
//   ReactDOM.render(<Handler />, document.getElementById("app"))
// })

ReactDOM.render(routes, document.getElementById("app"))

// ReactDOM.render(<App/>, document.getElementById("app"));
