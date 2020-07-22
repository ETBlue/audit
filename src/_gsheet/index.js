import React, { useState } from 'react'

import { fetchSheet } from './helpers'

export const SheetContext = React.createContext()

export const useSheet = () => {
  const [sheet, setSheet] = useState([])
  const handleFetchDone = result => {
    setSheet(
      result.map(item => {
        return {
          title: item[' Title'],
          title_en: item[' Title En']
        }
      })
    )
  }

  return { sheet, fetchSheet, handleFetchDone }
}
