import {normalizedComments as defaultComments} from '../fixtures'
import {TYPE} from '../constants'

export default  (commentsState = defaultComments, action) => {
  const {type, payload} = action;
  switch (type) {

    default:
      return commentsState
  }
}