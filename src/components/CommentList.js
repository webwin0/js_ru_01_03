import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../HOC/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        const { isOpen, comments, toggleOpen } = this.props
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const commentItems = comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <a href = "#" onClick = {toggleOpen}>{actionText}</a>
                <ul>{isOpen ? commentItems : null}</ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList)