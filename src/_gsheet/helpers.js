import axios from 'axios'
import Papa from 'papaparse'

export const SOURCE =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgMi9mafWNiVwaf279gX25Hh69ivGjwno0wQyKVAY_5YlWtyTH5hm0yMOS4j43ybo3wbZtrUe2i2I/pub?gid=928708383&single=true&output=csv'

export const fetchSheet = async callback => {
  const response = await axios.get(SOURCE)

  Papa.parse(response.data, {
    header: true,
    complete: result => {
      if (result.data.some(item => item[` Title`])) {
        callback(result.data)
      } else {
        console.error('error: importJSON still working. retrying...')
        window.setTimeout(() => {
          window.open(SOURCE)
          fetchSheet(callback)
        }, 1000)
      }
    },
    error: error => {
      console.error(error)
    }
  })
}

export const getCsv = sharedNotes =>
  Papa.unparse(sharedNotes, { header: false })
