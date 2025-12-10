import { FormInputNoLabel, LabeledInput, SubmitButton } from "../components";
import { UserIcon, LockIcon } from "../components/icons";
import { Form, Link } from "react-router";

export const Login = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="form-container card w-96 p-10 flex flex-col gap-y-4 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-primary">Login</h1>
        <Form method="POST" className="flex flex-col gap-y-4">
          <FormInputNoLabel icon={UserIcon} defaultValue="test@test.com" name="identifier" placeholder="E-mail" type="email" />
          <FormInputNoLabel icon={LockIcon} name="password" placeholder="Password" type="password" />
          <SubmitButton colorClass="btn-primary" text="Login" />
          <button type="button" className="btn text-[1rem] btn-lg btn-block btn-secondary uppercase">Guest User</button>
        </Form>
        <p className="text-center">Not a member yet? <Link className="ml-2 link link-hover link-secondary capitalize" to="/register">Register</Link></p>
      </div>
    </section>
  )
}