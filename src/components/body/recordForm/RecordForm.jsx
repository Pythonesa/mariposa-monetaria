import RecordFormItem from "./RecordFormItem";
import { useState } from "react";


export default function RecordForm() {
  const [record, setRecord] = useState({
    name: "",
    amount: 0,
    category: "",
    description: "",
    date: new Date().toISOString().split('T')[0]
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value
    }));
  }
  const hadleFormSubmit = (event) => {
    event.preventDefault();
    console.log(record);
  }
  return (
    <form name="recordForm" className="flex flex-col justify-center items-center w-80 sm:w-10/12">
      <RecordFormItem labelText={"Nombre:"} inputName={"name"} inputPlaceHolder={"Ej. Compra supermercado"} onChange={handleInputChange} inputValue={record.name}/>
      <div className="flex flex-col p-2 w-11/12 sm:flex-row">
        <label htmlFor="isIncome" className="text-mm p-1 text-left mr-2 sm:w-1/3 sm:text-right">Tipo</label>
        <select name="isIncome" className="text-mm p-1 w-full rounded placeholder-gray-300 bg-white/80" onChange={handleInputChange}>
          <option value="false">Gasto</option>
          <option value="true">Ingreso</option>
        </select>
      </div>
      <RecordFormItem labelText={"Monto:"} inputName={"amount"} inputType={"number"} onChange={handleInputChange} inputValue={String(record.amount)}/>
      <RecordFormItem labelText={"Categoría:"} inputName={"category"} inputPlaceHolder={"Ej. supermercado"} onChange={handleInputChange} inputValue={record.category}/>
      <RecordFormItem labelText={"Descripción:"} inputName={"description"} inputPlaceHolder={"Ej. Frutas y verduras para el mes."} onChange={handleInputChange}/>
      <RecordFormItem labelText={"Fecha:"} inputName={"date"} inputType={"date"} inputValue={record.date} onChange={handleInputChange}/>
      <button type="submit" className="p-2 m-2 bg-mm-blue text-mm-yellow rounded shadow shadow-mm hover:bg-mm-teal hover:text-mm-sand" onClick={hadleFormSubmit}>Añadir registro</button>
    </form>
  )
}