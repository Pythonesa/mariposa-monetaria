import Logo from "./Logo";
import Menu from "./Menu";


export default function Header () {
    return (
        <div className="flex flex-row justify-between items-center bg-mm-blue min-w-80">
        <Logo />
        <Menu />
      </div>
    )
}