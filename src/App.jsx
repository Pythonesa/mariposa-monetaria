import Body from "./components/body/Body"
import Header from "./components/header/Header"
import { useState, useEffect } from "react"

const initialStateRecords = JSON.parse(localStorage.getItem("records")) || []

function App() {

  const [records, setRecords] = useState(initialStateRecords)

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records))
  }, [records])

  const addRecord = (record) => {
    setRecords([...records, record])
  }

  const recordsByDate = (records) => {
    return records.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  const editRecord = (record) => {
    const newRecords = records.map((r) => {
      if (r.id === record.id) {
        return record
      }
      return r
    })
    setRecords(newRecords)
  }

  const deleteRecord = (id) => {
    const newRecords = records.filter((r) => r.id !== id)
    setRecords(newRecords)
  }

  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <Body records={recordsByDate(records)} addRecord={addRecord} editRecord={editRecord} deleteRecord={deleteRecord} />
    </div>
  )
}

export default App
