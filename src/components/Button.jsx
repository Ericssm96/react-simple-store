export const Button = ({text, type, colorClass}) => {
  return (
    <button type={type} className={`btn text-[1rem] btn-lg btn-block ${colorClass} uppercase`}>{text}</button>
  )
}