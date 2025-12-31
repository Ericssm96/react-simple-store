export const LabeledSelect = ({labelText, name, valuesList, optionsList, defaultValue, size, elemId}) => {
  return (
    <div className="input-area flex flex-col items-start gap-y-2">
      <label className="text-sm" htmlFor={elemId}>
        <span className="label-text">{labelText}</span>
      </label>
      <select className={`select select-${size}`} name={name} id={elemId} defaultValue={defaultValue}>
        {optionsList.map((option, index) => {
          return (
            <option key={option} value={valuesList[index]}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}