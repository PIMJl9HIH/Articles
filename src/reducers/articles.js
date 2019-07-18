import {normalizedArticles as defaultArticles} from '../fixtures'
import {TYPE} from '../constants'
import {arrToMap} from "../helpers";


export default  (articleState = arrToMap(defaultArticles), action) => {
  const {type, payload, randomId} = action;
  switch (type) {

    case TYPE.DELETE_ARTICLE:
      const tmpState = {...articleState}
      delete tmpState[payload.id]
      return tmpState

    case TYPE.ADD_COMMENT:
      const article = articleState[payload.articleId]
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    default:
      return articleState
  }
}