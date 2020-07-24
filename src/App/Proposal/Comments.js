import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Icon, Divider, Comment } from 'semantic-ui-react'

import { fetchComments } from '_comment'

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null)
  const [url, setUrl] = useState(null)
  const handleFetchSuccess = data => {
    setUrl(data.url)
    setComments(data.comments)
  }
  useEffect(() => {
    if (!comments) {
      fetchComments(id, handleFetchSuccess)
    }
  }, [comments])

  if (!comments) {
    return <p className='center aligned info message'>Loading comments...</p>
  }

  if (comments.length === 0)
    return (
      <>
        <p className='center aligned info message'>No comment</p>
        <Join url={url} />
      </>
    )

  const sortedComments = comments.sort((a, b) => {
    if (a.timestamp < b.timestamp) return -1
    if (a.timestamp > b.timestamp) return 1
    return 0
  })

  return (
    <>
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
            <Comment.Text
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </Comment>
        ))}
      </Comment.Group>
      <Join url={url} />
    </>
  )
}

export default Comments

const Join = ({ url }) => (
  <>
    <Divider />
    <p className='center aligned'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Icon name='external link' />
        Join discussions
      </a>
    </p>
  </>
)
