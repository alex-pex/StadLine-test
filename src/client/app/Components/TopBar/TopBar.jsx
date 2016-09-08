import React, {Component} from "react"
import "./TopBar.sass"

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar">{ this.props.title }</div>
    )
  }
}
