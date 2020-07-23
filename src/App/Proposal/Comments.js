import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Comment, Label } from 'semantic-ui-react'

import { fetchComments } from '_comment'

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null)
  useEffect(() => {
    if (!comments) {
      fetchComments(id, setComments)
    }
  }, [])

  if (!comments || comments.length === 0)
    return <p className='info message'>No comments</p>

  return (
    <Comment.Group>
      {comments.map(comment => (
        <Comment key={comment.content}>
          <Comment.Author as='a' href={comment.profile} target='_blank'>
            {comment.author}
          </Comment.Author>
          <Comment.Metadata as='span'>
            {moment(comment.timestamp).format('YYYY-MM-DD HH:mm:ss')}
          </Comment.Metadata>
          {comment.groups?.map(group => (
            <span key={group} className='info title'>
              {group}
            </span>
          ))}
          <Comment.Text dangerouslySetInnerHTML={{ __html: comment.content }} />
        </Comment>
      ))}
    </Comment.Group>
  )
}

export default Comments
