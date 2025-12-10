import { useNavigation } from "react-router";

export const SubmitButton = ({text, type, colorClass}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button type="submit" className={`btn text-[1rem] btn-lg btn-block ${colorClass} uppercase`} disabled={isSubmitting}>
    {
      isSubmitting
      ?
      <>
        <span className="loading loading-spinner"></span>
        Loading...
      </>
      :
      text 
      || 
      "Submit"
    }
    </button>
  )
}