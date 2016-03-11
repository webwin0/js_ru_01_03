import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        artilce: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <a href = "#" onClick = {this.props.openArticle}>select</a>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getTitle() {
        const { article: { title }, openArticle  } = this.props
        return  (
            <h3 onClick={openArticle}>
                {title}
            </h3>
        )
    }

    getBody() {
        const { isOpen, article} = this.props
        if (!isOpen) return null
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments || []} />
            </div>
        )
    }
}

export default Article