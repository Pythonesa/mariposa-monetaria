import EditModal from "./EditModal"
import RecordArticle from "./recordForm/RecordArticle";
import RecordForm from "./recordForm/RecordForm";
import PropTypes from 'prop-types'
import { useState } from "react";

export default function Body({records, addRecord, editRecord, deleteRecord}) {

  const [showModal, setShowModal] = useState(false);

  return(

    <div className="flex flex-col justify-center items-center min-w-80 max-w-screen-lg w-full">
      <div className="flex flex-col items-center justify-center p-2 bg-mm-sand rounded shadow shadow-mm text-mm w-11/12 mt-2">
        <h2 className="text-mm p-2 font-bold text-mm-teal">Nuevo registro</h2>
        <RecordForm addRecord={addRecord}/>
      </div>
      <div className="flex flex-col items-center justify-center p-2 bg-mm-sand rounded shadow shadow-mm text-mm w-11/12 mt-2 mb-2">
        <h2 className="text-mm p-2 font-bold text-mm-teal">Registros recientes</h2>
        <div className="flex flex-col justify-center items-center w-80 sm:w-10/12 px-2">
          {records.map((record) => (
            <RecordArticle key={record.id} record={record} editRecord={editRecord} deleteRecord={deleteRecord} setShowModal={setShowModal}/>
          ))}
        </div>
      </div>
      {showModal && <EditModal editRecord={editRecord} toEditRecord={records[0]}/>}
    </div>

    
  )
}

Body.propTypes = {
  records: PropTypes.array,
  addRecord: PropTypes.func,
  editRecord: PropTypes.func,
  deleteRecord: PropTypes.func
}