import { FormInputNoLabel, LabeledInput, SubmitButton } from "../components";
import { UserIcon, LockIcon } from "../components/icons";
import { Form, Link } from "react-router";

export const Login = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="form-container bg-purple-100 rounded-xl w-screen max-w-[420px] p-10 flex flex-col gap-y-4 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-primary">Login</h1>
        <Form method="POST" className="flex flex-col gap-y-4">
          <FormInputNoLabel icon={UserIcon} defaultValue="test@test.com" name="identifier" placeholder="E-mail" type="email" />
          <FormInputNoLabel icon={LockIcon} name="password" placeholder="Password" type="password" />
          <SubmitButton colorClass="btn-primary" text="Login" />
          <button type="button" className="btn text-[1rem] btn-lg btn-block btn-secondary uppercase">Guest User</button>
        </Form>
        <p className="text-center">Not a member yet? <Link className="text-secondary hover:text-primary" to="/register">Register</Link></p>
      </div>
    </section>
  )
}