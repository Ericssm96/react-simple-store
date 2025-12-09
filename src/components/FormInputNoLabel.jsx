import { UserIcon } from "./icons";

export const FormInputNoLabel = ({icon: Icon, name, placeholder, type}) => {
  return (
      <label className="input w-full">
        <Icon />

        <input name={name} type={type} className="grow" placeholder={placeholder} />
      </label>
  )
}