import imgLogo from "../../assets/images/logo.svg"

export default function Logo () {
    return(
        <div className="flex flex-row justify-center items-center mx-4">
          <img src={imgLogo} alt="Mariposa Monetaria Logo" className="w-32"/>
          <h1 className="text-4xl font-bold text-mm-yellow ">Mariposa Monetaria</h1>
        </div>
    )
}