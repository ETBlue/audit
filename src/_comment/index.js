import axios from 'axios'

export const fetchComments = async (id, callback) => {
  const { data } = await axios.get(
    `https://discuss.summit2020.g0v.tw/comments/get/${id}/0`
  )
  callback(data.posts.map(post => getComment(post)))
}

const getComment = post => {
  return {
    author: post.user.username,
    timestamp: post.timestamp,
    content: post.content,
    groups: post.user.groupTitleArray.filter(item => !!item)
  }
}
