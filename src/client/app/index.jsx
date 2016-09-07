import React, {Component} from "react"
import ReactDOM from "react-dom"

import "./index.sass"

class App extends Component {
  render() {
    return <p>Hello React !</p>
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
