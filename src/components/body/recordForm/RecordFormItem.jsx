import PropTypes from 'prop-types'

export default function RecordFormItem ({labelText, inputName, inputPlaceHolder="", inputType="text", inputValue, onChange}) {
  return(
    <div className="flex flex-col p-2 w-11/12 sm:flex-row">
      <label htmlFor={inputName} className="text-mm p-1 text-left mr-2 sm:w-1/3 sm:text-right">{labelText}</label>
      <input name={inputName} type={inputType} className="text-mm p-1 w-full rounded placeholder-gray-300 bg-white/80" placeholder={inputPlaceHolder} value={inputValue} onChange={onChange} />
    </div>
  )
}

RecordFormItem.propTypes = {
	labelText: PropTypes.string,
	inputName: PropTypes.string,
	inputPlaceHolder: PropTypes.string || PropTypes.number,
	inputType: PropTypes.string,
	inputValue: PropTypes.string || PropTypes.number,
	onChange: PropTypes.func
}