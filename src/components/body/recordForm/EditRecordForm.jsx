import RecordFormItem from "./RecordFormItem";
import { useState } from "react";
import PropTypes from 'prop-types'


export default function EditRecordForm({editRecord, toEditRecord, setShowModal}) {
  const [record, setRecord] = useState({
    id : toEditRecord.id,
    isIncome: toEditRecord.isIncome,
    name: toEditRecord.name,
    amount: toEditRecord.amount,
    category: toEditRecord.category,
    description: toEditRecord.description,
    date: toEditRecord.date
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value
    }));
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRecord((prevRecord) => ({
      ...prevRecord,
      id: Date.now()
    }))
    editRecord(record);
    closeModal();
  }

  const closeModal = () => {
    setShowModal(false);
  }
  return (
    console.log(record),
    <form name="recordForm" className="flex flex-col justify-center items-center w-80 sm:w-10/12">
      <RecordFormItem labelText={"Nombre:"} inputName={"name"} inputPlaceHolder={"Ej. Compra supermercado"} onChange={handleInputChange} inputValue={record.name}/>
      <div className="flex flex-col p-2 w-11/12 sm:flex-row">
        <label htmlFor="isIncome" className="text-mm p-1 text-left mr-2 sm:w-1/3 sm:text-right">Tipo</label>
        <select name="isIncome" className="text-mm p-1 w-full rounded placeholder-gray-300 bg-white/80 focus:outline-none" onChange={handleInputChange}>
          <option value="false">Gasto</option>
          <option value="true">Ingreso</option>
        </select>
      </div>
      <RecordFormItem labelText={"Monto:"} inputName={"amount"} inputType={"number"} onChange={handleInputChange} inputValue={String(record.amount)}/>
      <RecordFormItem labelText={"Categoría:"} inputName={"category"} inputPlaceHolder={"Ej. supermercado"} onChange={handleInputChange} inputValue={record.category}/>
      <RecordFormItem labelText={"Descripción:"} inputName={"description"} inputPlaceHolder={"Ej. Frutas y verduras para el mes."} onChange={handleInputChange} inputValue={String(record.description)}/>
      <RecordFormItem labelText={"Fecha:"} inputName={"date"} inputType={"date"} inputValue={record.date} onChange={handleInputChange}/>
      <button type="submit" className="p-2 m-2 bg-mm-blue text-mm-yellow rounded shadow shadow-mm hover:bg-mm-teal hover:text-mm-sand" onClick={handleFormSubmit}>Guardar cambios</button>
      <button type="button" className="p-2 m-2 bg-mm-blue text-mm-yellow rounded shadow shadow-mm hover:bg-mm-teal hover:text-mm-sand" onClick={closeModal}>Cancelar</button>
    </form>
  )
}

EditRecordForm.propTypes = {
  editRecord: PropTypes.func,
  toEditRecord: PropTypes.object,
  setShowModal: PropTypes.func
}