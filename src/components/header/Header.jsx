import Logo from "./Logo";
import Menu from "./Menu";


export default function Header () {
    return (
        <div className="header flex flex-row justify-between items-center bg-mm-blue">
        <Logo />
        <Menu />
      </div>
    )
}