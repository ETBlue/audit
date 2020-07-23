import { TOPICS, FORMATS, LICENSES } from 'App/config'

export const getTopic = topic => TOPICS.find(item => item.key === topic)

export const getFormat = format => FORMATS.find(item => item.key === format)

export const getLicense = license => LICENSES.find(item => item.key === license)
