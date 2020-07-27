import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Button, Icon, Divider, Comment } from 'semantic-ui-react'

import { fetchComments } from '_comment'

const Comments = ({ id, setCommentsVersion }) => {
  const [comments, setComments] = useState(null)
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleFetchSuccess = data => {
    setLoading(false)
    setUrl(data.url)
    setComments(data.comments)
    setCommentsVersion(data.comments.length)
  }
  const handleRefresh = () => {
    setLoading(true)
    fetchComments(id, handleFetchSuccess)
  }

  useEffect(() => {
    if (!comments) {
      handleRefresh()
    }
  }, [comments])

  const actionProps = { url, handleRefresh, loading }

  if (!comments) {
    return <p className='center aligned info message'>Loading comments...</p>
  }

  if (comments.length === 0)
    return (
      <>
        <p className='center aligned info message'>No comment</p>
        <Join {...actionProps} />
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
              href={comment.url}
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
      <Join {...actionProps} />
    </>
  )
}

export default Comments

const Join = ({ url, handleRefresh, loading }) => (
  <>
    <Divider />
    <p className='action'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Icon name='external' />
        Join discussions
      </a>
      <Button
        floated='right'
        icon
        basic
        className='borderless'
        loading={loading}
        onClick={handleRefresh}
      >
        <Icon name='refresh' />
      </Button>
    </p>
  </>
)
