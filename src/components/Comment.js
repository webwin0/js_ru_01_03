import React from 'react'

export default (props) => {
    const {comment} = props
    if (!comment)
        return <noscript />
    return (
        <div>
            <p>{comment.text}</p>
        </div>
    )
}
