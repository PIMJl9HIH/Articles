import React from 'react'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
  return (
    <div>
      <p>{comment.text} <b> {comment.user}</b></p>
    </div>
  )
}

const mapStateToProps = () => {

  const commentSelector = commentSelectorFactory()

  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    }
  }
}

export default connect(mapStateToProps)(Comment)
