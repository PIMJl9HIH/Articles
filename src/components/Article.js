import React, {Component} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'


class Article extends Component {

  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }


  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close': 'open'}
        </button>
         {this.getBody()}
      </div>
    )
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

export default Article