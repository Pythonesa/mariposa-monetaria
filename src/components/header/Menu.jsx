import MenuButton from "./MenuButton";

export default function Menu () {
    return(
        <nav className="flex flex-row justify-center items-center p-1 text-mm-sand text-xl">
          <MenuButton text={"Inicio"} />
          <MenuButton text={"Reportes"} />
        </nav>
    )
}