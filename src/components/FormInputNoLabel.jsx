import { UserIcon } from "./icons";

export const FormInputNoLabel = ({icon: Icon, name, defaultValue, placeholder, type}) => {
  return (
      <label className="input w-full">
        <Icon className="text-red-800" />

        <input name={name} defaultValue={defaultValue} type={type} className="grow" placeholder={placeholder} />
      </label>
  )
}