import {createSelector} from 'reselect'
import {mapToArr} from "../helpers";

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters ) => {
  const {dateRange: {from, to}} = filters

  return  mapToArr(articles).filter(article => {
    const published = Date.parse(article.date)
    return (!from || !to || (published > from && published < to))
  })
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id]
})

