import React from 'react'
import {connect} from 'react-redux'

function Comment({comment}) {
  return (
    <div>
      <p>{comment.text} <b> {comment.user}</b></p>
    </div>
  )
}

export default connect( (state, ownProps) => {

  return {comment: state.comments.find( comment => comment.id === ownProps.id)}
})(Comment)