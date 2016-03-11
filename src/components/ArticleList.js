import React, { Component, PropTypes } from 'react'
import Article from './Article'
import CommentList from './CommentList'

class ArticleList extends Component {
    constructor() {
        super()
        this.state = {
            openArticleId: null
        }
    }
    render() {
        const articles = this.props.articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         openArticle = {this.openArticle(article.id)}
                         isOpen = {article.id === this.state.openArticleId}/>
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

    openArticle = (openArticleId) => (ev) => {
        if (ev) ev.preventDefault()
        this.setState({ openArticleId })
    }
}

export default ArticleList