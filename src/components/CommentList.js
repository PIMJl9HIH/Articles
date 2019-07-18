import React from 'react'
import Comment from './Comment'
import CommentForm from './commentForm'
import toggleOpen from '../decorators/toggleOpen'

function CommentList ({article, isOpen, toggleOpen }) {
  const text = isOpen ? 'hide comments' : 'show comments'

  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody({article, isOpen})}
    </div>
  )
}

function getBody({article: {comments = [], id}, isOpen}) {
  if (!isOpen) return null;
  if(!comments.length) return (
    <div>
      <p>No comments yet</p>
      <CommentForm articleId={id}/>
    </div>
  )

  return (
    <div>
      <ul>
        {comments.map( (id) => <li key={id}><Comment id={id} /> </li>)}
      </ul>
      <CommentForm articleId={id}/>
    </div>

  )
}

export default toggleOpen(CommentList)