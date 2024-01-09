import PropTypes from 'prop-types'

export default function MenuButton ({text}) {
    return(
        <button className="mx-2 text-mm-sand  hover:text-mm-yellow transition-colors duration-500 ease-in-out border-b-2 border-transparent hover:border-mm-yellow">
            {text}
        </button>
    )
}

MenuButton.propTypes = {
    text: PropTypes.string
}