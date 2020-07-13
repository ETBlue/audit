import queryString from 'query-string'

export const getLink = ({ queries, name, value, pathname }) => {
  const newQueries = {
    ...queries,
    [name]: value
  }
  return `${pathname}?${queryString.stringify(newQueries)}`
}
