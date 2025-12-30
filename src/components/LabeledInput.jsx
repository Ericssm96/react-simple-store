export const LabeledInput = ({type, elemId, labelText, name, size = "md"}) => {

  return (
    <div className="input-area flex flex-col items-start gap-y-2">
      <label className="text-sm" htmlFor={elemId}>{labelText}</label>
      <input type={type} id={elemId} name={name} placeholder="Type here" className={`input w-full ${size}`} />
    </div>
  )
}
