import React from "react"
import ConversationItem from "./ConversationItem.jsx"

import "./Conversation.sass"

export default class Conversation extends React.Component {
  render() {
    return (
      <ul className='conversation'>
        <span className="title">Conversation with Kerem</span>

        <ConversationItem author="owner" />
        <ConversationItem author="other" />
      </ul>
    )
  }
}
