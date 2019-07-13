import {TYPE} from '../constants'

export default  (count = 0, action) => {
  switch (action.type) {
    case TYPE.INCREMENT:
      return count + 1
    default:
      return count
  }
}