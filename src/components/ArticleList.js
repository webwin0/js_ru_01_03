import React, { Component, PropTypes } from 'react'
import Article from './Article'
import isSelected from '../HOC/isSelected'

class ArticleList extends Component {

    render() {
        const { openArticleId, openArticle} = this.props

        const articles = this.props.articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         openArticle = {openArticle(article.id)}
                         isOpen = {article.id === openArticleId}/>
            </li>
        )
        return (
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }


}

export default isSelected(ArticleList)
