import React, { Component, PropTypes } from 'react'
import Body from './Body'

class Article extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        artilce: PropTypes.object.isRequired
    }

    render() {
        const { isOpen, article } = this.props
        return (
            <div>
                <a href = "#" onClick = {this.props.openArticle}>select</a>
                {this.getTitle()}
                <Body
                    isOpen = {isOpen}
                    article = {article}
                />
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