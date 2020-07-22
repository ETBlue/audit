import React from 'react'
import axios from 'axios'

import { getProposal } from './helpers'

export const DataContext = React.createContext()

export const fetchProposals = async () => {
  try {
    const response = await axios.get('https://api.summit2020.g0v.tw/projects')
    return response.data
      .filter(item => item.enable)
      .map(item => getProposal(item))
  } catch (error) {
    console.error(error)
    return []
  }
}
