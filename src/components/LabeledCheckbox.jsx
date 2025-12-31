export const LabeledCheckbox = ({labelText, name, defaultChecked, size}) => {
  return (
   <div className="flex flex-col gap-y-2 items-center">
    <label htmlFor={name} className="label cursor-pointer">
      <span className="label-text">{labelText}</span>
    </label>
    <input type="checkbox" defaultChecked={defaultChecked} name={name} id={name} className={`checkbox checkbox-primary checkbox-${size}`} />
   </div>
  )
}