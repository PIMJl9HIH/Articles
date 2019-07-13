import {TYPE} from '../constants'

export function increment () {
  return {
    type: TYPE.INCREMENT
  }
}
export function deleteArticle (id) {
  return {
    type: TYPE.DELETE_ARTICLE,
    payload: {
      id
    }
  }
}
