import {normalizedComments as defaultComments} from '../fixtures'
import {TYPE} from '../constants'

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  console.log(comment);
  console.log(acc);
  return acc
}, {})

export default  (commentsState = commentsMap, action) => {
  const {type, payload} = action;
  switch (type) {

    default:
      return commentsState
  }
}