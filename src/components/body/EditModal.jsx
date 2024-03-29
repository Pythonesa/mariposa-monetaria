import EditRecordForm from "./recordForm/EditRecordForm";
import PropTypes from 'prop-types'


export default function EditModal( {editRecord, toEditRecord, setShowModal} ) {

    return (
        <div className="max-w-screen flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40">
            <div className="flex flex-col items-center justify-center p-2 bg-mm-sand rounded shadow shadow-mm text-mm w-11/12 mt-2 mb-2 max-w-screen-md">
            <h2 className="text-mm p-2 font-bold text-mm-teal">Editar registro</h2>
                <div className="flex flex-col justify-center items-center w-80 sm:w-10/12 px-2">
                    <EditRecordForm editRecord={editRecord} toEditRecord={toEditRecord} setShowModal={setShowModal}/>
                </div>
            </div>
        </div>

    )
}

EditModal.propTypes = {
  editRecord: PropTypes.func,
  toEditRecord: PropTypes.object,
  setShowModal: PropTypes.func
}