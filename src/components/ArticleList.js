import React, {Component} from 'react'
import Article from './Article'
import articleDecor from "../decorators/articleDecor";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    // from accordion
    isOpen: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  render(){
    const {articles, openItemId, toggleOpenItem } = this.props;
    const articleElements = articles.map( (article) => <li key={article.id} >
      <Article
        article={article}
        isOpen={article.id === openItemId}
        toggleOpen={toggleOpenItem(article.id)}
      />
    </li> );

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

}

export default connect(({filters, articles}) => {
  const {selected, dateRange: {from, to}} = filters

  const filteredArticles =  articles.filter(article => {
    const published = Date.parse(article.date)
    return (!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })

  return {
    articles: filteredArticles
  }
})(articleDecor(ArticleList))