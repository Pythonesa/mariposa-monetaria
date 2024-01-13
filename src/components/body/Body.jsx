import RecordArticle from "./recordForm/RecordArticle";
import RecordForm from "./recordForm/RecordForm";

export default function Body(){
  return(
    <div className="flex flex-col justify-center items-center min-w-80 max-w-screen-lg w-full">
      <div className="flex flex-col items-center justify-center p-2 bg-mm-sand rounded shadow shadow-mm text-mm w-11/12 mt-2">
        <h2 className="text-mm p-2 font-bold text-mm-teal">Nuevo registro</h2>
        <RecordForm />
      </div>
      <div className="flex flex-col items-center justify-center p-2 bg-mm-sand rounded shadow shadow-mm text-mm w-11/12 mt-2 mb-2">
        <h2 className="text-mm p-2 font-bold text-mm-teal">Registros recientes</h2>
        <div className="flex flex-col justify-center items-center w-80 sm:w-10/12 px-2">
          <RecordArticle record={{name: "Compra supermercado", amount: 1000, category: "Supermercado", description: "Frutas y verduras para el mes", date: "2022-01-01", isIncome: false}}/>
          <RecordArticle record={{name: "Sueldo", amount: 20000, category: "Sueldo", description: "Sueldo de Diciembre/2021", date: "2022-01-01", isIncome: true}}/>
        </div>
      </div>
    </div>
  )
}
