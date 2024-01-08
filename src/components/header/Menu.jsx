import MenuButton from "./MenuButton";

export default function Menu () {
    return(
        <nav className="flex flex-row justify-center items-center p-4 text-mm-sand text-2xl font-bold ">
          <MenuButton text={"📋 Nuevo registro"} />
          <MenuButton text={"📊 Ver historial"} />
        </nav>
    )
}