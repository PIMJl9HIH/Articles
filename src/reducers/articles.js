import {normalizedArticles as defaultArticles} from '../fixtures'
import {TYPE} from '../constants'

export default  (articleState = defaultArticles, action) => {
  const {type, payload} = action;
  switch (type) {
    case TYPE.DELETE_ARTICLE:
      return articleState.filter( (article) => article.id !== payload.id)
    default:
      return articleState
  }
}