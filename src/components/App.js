import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'

import Filters from '../Filters'



class App extends Component {
  
  render() {

    return (
      <div>

        <UserForm/>
        <Filters articles={this.props.articles} />
       <ArticleList  articles={this.props.articles} />

      </div>
    )
  }

  changeSelection = selection => this.setState({ selection })


}

export default App