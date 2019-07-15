import React, {Component} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteArticle} from "../../AC";


class Article extends Component {

  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close': 'open'}
        </button>
        <button onClick={this.handleDelete}>delete</button>
         {this.getBody()}
      </div>
    )
  }

  handleDelete = () =>{
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id)
  }

  getBody = () => {
    const {article, isOpen} = this.props;

    if (!isOpen) return null;

    return (<div>
      {article.text}
      <CommentList comments={article.comments} />
      </div>
    )
  }

}

export default connect(null, {deleteArticle})(Article)