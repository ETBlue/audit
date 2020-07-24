import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Comment } from 'semantic-ui-react'

import { fetchComments } from '_comment'

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null)
  useEffect(() => {
    if (!comments) {
      fetchComments(id, setComments)
    }
  }, [comments])

  if (!comments || comments.length === 0)
    return <p className='center aligned info message'>No comments</p>

  const sortedComments = comments.sort((a, b) => {
    if (a.timestamp < b.timestamp) return -1
    if (a.timestamp > b.timestamp) return 1
    return 0
  })

  return (
    <Comment.Group>
      {sortedComments.map(comment => (
        <Comment key={comment.content}>
          <Comment.Author
            as='a'
            href={comment.profile}
            target='_blank'
            rel='noopener noreferrer'
          >
            {comment.author}
          </Comment.Author>
          <Comment.Metadata
            as='a'
            href={`https://discuss.summit2020.g0v.tw/post/${comment.pid}`}
            target='_blank'
            rel='noopener noreferrer'
          >
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
