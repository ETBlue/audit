import axios from 'axios'

export const fetchComments = async (id, callback) => {
  const { data } = await axios.get(
    `https://discuss.summit2020.g0v.tw/comments/get/${id}/0`
  )
  callback({
    url: `https://discuss.summit2020.g0v.tw/topic/${data.tid}`,
    comments: data.posts.map(post => getComment(post))
  })
}

const getComment = post => {
  return {
    url: `https://discuss.summit2020.g0v.tw/post/${post.pid}`,
    author: post.user.username,
    profile: `https://discuss.summit2020.g0v.tw/uid/${post.user.uid}`,
    timestamp: post.timestamp,
    content: post.content,
    groups: post.user.groupTitleArray.filter(item => !!item)
  }
}
