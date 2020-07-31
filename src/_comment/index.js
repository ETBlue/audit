import axios from 'axios'

const HOST_URL = 'https://discuss.summit2020.g0v.tw'

export const fetchComments = async (id, callback) => {
  const { data } = await axios.get(`${HOST_URL}/comments/get/${id}/0`)
  callback({
    url: `${HOST_URL}/topic/${data.tid}`,
    comments: data.posts.map(post => getComment(post))
  })
}

const getComment = post => {
  return {
    url: `${HOST_URL}/post/${post.pid}`,
    author: post.user.username,
    profile: `${HOST_URL}/uid/${post.user.uid}`,
    timestamp: post.timestamp,
    content: getContent(post.content),
    groups: post.user.groupTitleArray.filter(item => !!item)
  }
}

const getContent = content =>
  content
    .replace('<img src="/assets/', `<img src="${HOST_URL}/assets/`)
    .replace('class="img-responsive img-markdown"', 'class="ui image"')
