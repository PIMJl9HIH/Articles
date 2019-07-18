import {normalizedComments as defaultComments} from '../fixtures'
import {TYPE} from '../constants'
import {arrToMap} from "../helpers";

const commentsMap = arrToMap(defaultComments)

export default  (commentsState = commentsMap, action) => {
  const {type, payload, randomId} = action;
  switch (type) {
    case TYPE.ADD_COMMENT:
      return {...commentsState, [randomId]: payload.comment}
    default:
      return commentsState
  }
}