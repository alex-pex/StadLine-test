import React, {Component} from "react"
import $ from "jquery"

import Comment from "../Conversation/Comment.jsx"
import "../Conversation/Conversation.sass"

export default class Issue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      issue: null,
    }
  }

  componentDidMount() {
    self = this
    const baseUrl = "https://api.github.com/repos/" +
                      this.props.params.user + "/" +
                      this.props.params.repo + "/issues/" +
                      this.props.params.number

    $.get(baseUrl, function(data) {
      self.setState({
        issue: data,
        author: data.user.login,
      })
    })

    $.get(baseUrl + "/comments", function(data) {
      self.setState({
        comments: data,
      })
    })
  }

  isAuthorComment(comment) {
    return this.state.author === comment.user.login
  }

  renderComments() {
    return this.state.comments.map((comment) => (
      <Comment key={ comment.id } comment={ comment }
               isAuthor={ this.isAuthorComment(comment) } />
    ))
  }

  render() {
    return (
      <ul className='conversation'>
        <span className="title">Conversation with Kerem</span>
        { this.state.issue ?
          <Comment comment={ this.state.issue } isAuthor={true} />
        : ''}

        { this.renderComments() }
      </ul>
    )
  }
}

Issue.propTypes = {
  params: React.PropTypes.object
}
