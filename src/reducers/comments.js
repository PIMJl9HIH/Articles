import {normalizedComments as defaultComments} from '../fixtures'
import {TYPE} from '../constants'

export default  (commentsState = defaultComments, action) => {
  const {type, payload} = action;
  switch (type) {
    case TYPE.DELETE_ARTICLE:
      return commentsState.filter( (article) => article.id !== payload.id)
    default:
      return commentsState
  }
}