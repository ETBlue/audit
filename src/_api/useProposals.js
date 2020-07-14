import { useState, useEffect } from 'react'

import { fetchProposals } from '_api'

const useProposals = () => {
  const [proposals, setProposals] = useState([])

  const fetch = async () => {
    const res = await fetchProposals()
    setProposals(res)
  }

  useEffect(() => {
    fetch()
  }, [])

  return { proposals, refetch: fetch }
}

export default useProposals
