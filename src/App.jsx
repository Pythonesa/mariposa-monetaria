import Logo from "./assets/images/logo.svg"

function App() {

  return (
    <div className="App min-h-screen flex flex-col bg-mm-sand">
      <div className="flex flex-col bg-mm-blue">
        <div className="header flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center mx-4">
            <img src={Logo} alt="Mariposa Monetaria Logo" className="w-32"/>
            <h1 className="text-4xl font-bold text-mm-yellow ">Mariposa Monetaria</h1>
          </div>
          <nav className="flex flex-row justify-center items-center p-4 text-mm-sand text-2xl font-bold ">
            <button className="mx-4 text-mm-sand  hover:text-mm-yellow transition-colors duration-500 ease-in-out border-b-2 border-transparent hover:border-mm-yellow">📋 Nuevo registro</button>
            <button className="mx-4 text-mm-sand  hover:text-mm-yellow transition-colors duration-500 ease-in-out border-b-2 border-transparent hover:border-mm-yellow">📊 Ver historial</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App
