import React from "react"

export default class ConversationItem extends React.Component {
  render() {
    return (
      <li className={"conversation-item " + this.props.author }>
        <div className='avatar'>
          <img src="http://fakeimg.pl/65x65/" />
        </div>
        <p className='message'>All he wanted was to be the best, went to
        class where all the teachers stress. { this.props.author }</p>
      </li>
    )
  }
}

ConversationItem.propTypes = {
  author: React.PropTypes.string.isRequired,
}
