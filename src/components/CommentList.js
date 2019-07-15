import React from 'react'
import Comment from './Comment'
import CommentForm from './commentForm'
import toggleOpen from '../decorators/toggleOpen'

function CommentList ({comments = [], isOpen, toggleOpen }) {
  const text = isOpen ? 'hide comments' : 'show comments'

  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody({comments, isOpen})}
    </div>
  )
}

function getBody({comments, isOpen}) {
  if (!isOpen) return null;
  if(!comments || !comments.length) return <p>no comments yet</p>

  return (
    <div>
      
      <ul>
        {comments.map( (id) => <li key={id}><Comment id={id} /> </li>)}
      </ul>

      <CommentForm />
    </div>

  )
}

export default toggleOpen(CommentList)