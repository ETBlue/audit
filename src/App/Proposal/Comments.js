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

  if (comments) {
    return (
      <Comment.Group>
        {comments.map(comment => (
          <Comment key={comment.content}>
            <Comment.Author as='span'>{comment.author}</Comment.Author>
            <Comment.Metadata as='span'>
              {moment(comment.timestamp).format('YYYY-MM-DD HH:mm:ss')}
            </Comment.Metadata>
            {comment.groups?.map(group => (
              <span key={group} className='title'>
                {group}
              </span>
            ))}
            <Comment.Text
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </Comment>
        ))}
      </Comment.Group>
    )
  } else {
    return null
  }
}
export default Comments
