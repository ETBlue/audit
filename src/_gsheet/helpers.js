import axios from 'axios'
import Papa from 'papaparse'

export const SOURCE =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgMi9mafWNiVwaf279gX25Hh69ivGjwno0wQyKVAY_5YlWtyTH5hm0yMOS4j43ybo3wbZtrUe2i2I/pub?gid=928708383&single=true&output=csv'

export const fetchSheet = async (done, error) => {
  const response = await axios.get(SOURCE)

  Papa.parse(response.data, {
    header: true,
    complete: result => {
      if (result.data.some(item => item[` Title`])) {
        done(result.data)
      } else {
        error()
      }
    },
    error: error => {
      console.error(error)
    }
  })
}

export const getCsv = sharedNotes => Papa.unparse(sharedNotes)
