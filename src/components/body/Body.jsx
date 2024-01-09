export default function Body(){
  return(
    <div className="flex flex-col justify-center items-center min-w-80">
      <div className="flex flex-col items-center justify-center p-2 bg-mm-sand rounded shadow shadow-mm text-mm w-11/12 mt-2">
        <h2 className="text-mm p-2 font-bold text-mm-teal">Nuevo registro</h2>
        <div className="flex flex-row p-2 w-full">
          <label className="text-mm p-1 text-right mr-2 ">Nombre:</label>
          <input name="name" type="text" className="text-mm p-1 w-full rounded placeholder-gray-300" placeholder="Ej: Compra supermercado"/>
        </div>
      </div>
    </div>
  )
}
