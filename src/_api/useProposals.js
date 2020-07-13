import { useState, useEffect } from 'react'

import { fetchData } from '_api'

const useProposals = () => {
  const [proposals, setProposals] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await fetchData()
      setProposals(res)
    }
    fetch()
  }, [])

  return { proposals }
}

export default useProposals
