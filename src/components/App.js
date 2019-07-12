import React from 'react'
import ArticleList from './ArticleList'

function App({articles})  {
  return (
    <div>
      <ArticleList  articles={articles}/>
    </div>
  )
}

export default App