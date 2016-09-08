import React, {Component} from "react"
import $ from "jquery"

import Comment from "../Conversation/Comment.jsx"
import "../Conversation/Conversation.sass"

export default class Issue extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      comments: [],
      issue: null,
      setTitle: context.setTitle
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
      self.state.setTitle(data.title)
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
        { this.state.issue ? (
          <div>
            <span className="title">{ this.state.issue.title }</span>
            <Comment comment={ this.state.issue } isAuthor={true} />
          </div>
        ) : '' }

        { this.renderComments() }
      </ul>
    )
  }
}

Issue.propTypes = {
  params: React.PropTypes.object,
}

Issue.contextTypes = {
  setTitle: React.PropTypes.func,
}
