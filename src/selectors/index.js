import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters ) => {
  const {dateRange: {from, to}} = filters

  return  articles.filter(article => {
    const published = Date.parse(article.date)
    return (!from || !to || (published > from && published < to))
  })
})



