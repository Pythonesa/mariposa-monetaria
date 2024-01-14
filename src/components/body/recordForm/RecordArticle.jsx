import PropTypes from 'prop-types'
import editImg from "../../../assets/images/edit.svg"
import deleteImg from "../../../assets/images/delete.svg"

export default function RecordArticle ({record, editRecord, deleteRecord}) {
  const backgroundColor = record.isIncome === "true" ? "bg-green-800/20" : "bg-red-800/20";
  return(
    <article key={record.id} className={`flex flex-col sm:flex-row justify-center items-center ${backgroundColor} rounded shadow shadow-mm text-mm w-11/12 mt-1 mb-2`}>
      <div className="flex flex-col sm:flex-row justify-between items-center p-2 w-full">
        <h2 className="font-bold sm:w-1/2">{record.name}</h2>
        <p>${record.amount}</p>
        <p>{record.date}</p>
      </div>
      <div className='flex flex-row justify-center items-center pb-2 sm:pb-0 sm:pr-2'>
        <button className='rounded hover:bg-white/30 ' >
          <img src={editImg} alt="Editar" className='w-5 m-2 sm:pr-1'/>
        </button>
        <button className='rounded hover:bg-white/30' onClick={() => deleteRecord(record.id)}>
          <img src={deleteImg} alt="Eliminar" className='w-5 m-2 sm:pr-1'/>
        </button>
      </div>
    </article>
  )
}

RecordArticle.propTypes = {
    record: PropTypes.object,
    editRecord: PropTypes.func,
    deleteRecord: PropTypes.func
}