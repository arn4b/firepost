import React from 'react'

export default function Comment({username, caption}) {
    return (
        <div className="comment">
            <span>
                {username}
            </span>
            <p>{caption}</p>
        </div>
    )
}
