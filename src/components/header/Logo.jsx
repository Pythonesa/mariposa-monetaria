import imgLogo from "../../assets/images/logo.svg"

export default function Logo () {
    return(
        <div className="flex flex-row justify-center items-center mx-1">
          <img src={imgLogo} alt="Mariposa Monetaria Logo" className="w-10"/>
          <h1 className="text-xl ml-1 text-mm-yellow">Mariposa Monetaria</h1>
        </div>
    )
}