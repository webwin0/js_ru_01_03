import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../HOC/toggleOpen'
import { createComment } from '../actions/comments'

const CommentList = React.createClass({
    propTypes: {
        comments: PropTypes.array
    },
    getInitialState() {
        return {
            comment: '',
            text: ''
        }
    },
    render() {
        const { isOpen, comments, toggleOpen } = this.props
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const commentItems = comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <a href = "#" onClick = {toggleOpen}>{actionText}</a>
                <ul>{isOpen ? commentItems : null}</ul>
                {this.getInput()}
            </div>
        )
    },

    getInput() {
        if (!this.props.isOpen) return null
        return <div>
            <input name="text" value={this.state.text} onChange = {this.onChange} />
            <a href = "#" onClick = {this.handleCreate}>add comment</a>
        </div>
    },

    onChange(ev, value) {
        this.setState({text: ev.target.value})
    },

    handleCreate(ev) {
        ev.preventDefault()
        createComment(this.state.text, this.props.articleId)
        this.setState({text: ''})
    }
})

export default toggleOpen(CommentList)