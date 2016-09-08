import React from "react"
import marked from "marked"

import "github-markdown-css/github-markdown.css"

export default class Comment extends React.Component {
  componentDidMount() {
  }

  getAuthorClass() {
    return this.props.isAuthor ? "owner" : "other"
  }

  render() {
    return (
      <li className={"conversation-item " + this.getAuthorClass() }>
        <div className='avatar'>
          <img src={ this.props.comment.user.avatar_url } />
        </div>
        <p className='message markdown-body'
           dangerouslySetInnerHTML={{__html: marked(this.props.comment.body)}}>
        </p>
      </li>
    )
  }
}

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired,
  isAuthor: React.PropTypes.bool.isRequired
}
