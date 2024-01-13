import moonImage from "../../assets/images/dark.svg"

export default function ColorModeButton () {
  return (
    <div className="flex flex-row justify-center items-center m-2">
      <button>
        <img src={moonImage} alt="Dark mode" className="hover:hue-rotate-180 transition duration-500" />
      </button>
    </div>
  )
}