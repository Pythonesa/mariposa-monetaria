import ColorModeButton from "./ColorModeButton";
import MenuButton from "./MenuButton";

export default function Menu () {
    return(
        <nav className="flex flex-row justify-center items-center p-1 text-mm-sand text-xl">
          <div>
            <MenuButton text={"Inicio"} />
            <MenuButton text={"Reportes"} />
          </div>
          <ColorModeButton />
        </nav>
    )
}