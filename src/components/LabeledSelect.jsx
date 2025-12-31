export const LabeledSelect = ({labelText, name, list, defaultValue, size, elemId}) => {
  return (
    <div className="input-area flex flex-col items-start gap-y-2">
      <label className="text-sm" htmlFor={elemId}>
        <span className="label-text">{labelText}</span>
      </label>
      <select className={`select select-${size}`} name={name} id={elemId} defaultValue={defaultValue}>
        {list.map((option) => {
          return (
            <option key={option} value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}