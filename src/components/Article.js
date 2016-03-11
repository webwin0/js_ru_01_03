import React, { Component, PropTypes } from 'react'
import CommentList from './CommentListOld'

class Article extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        article: PropTypes.object.isRequired
    }


    componentWillMount() {
        console.log('---', 'going to mount');
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

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return <noscript />
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments || []} />
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
}

export default Article