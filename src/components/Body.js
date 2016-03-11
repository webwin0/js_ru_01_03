import React from 'react'
import CommentList from './CommentList'

export default (props) => {
    const { isOpen, article} = props
    if (!isOpen) return <noscript />
    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments || []} />
        </div>
    )
}