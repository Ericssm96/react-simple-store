import { LabeledInput, SubmitButton } from "../components";
import { Form, Link } from "react-router";

export const Register = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="form-container card w-96 p-10 flex flex-col gap-y-4 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-primary">Register</h1>
        <Form method="POST" className="flex flex-col gap-y-4">
          <LabeledInput type="text" elemId="username" labelText="Username" name="username" />
          <LabeledInput type="email" elemId="email" labelText="Email" name="identifier" />
          <LabeledInput type="password" elemId="password" labelText="Password" name="password" />
          <SubmitButton colorClass="btn-primary" text="Register" />
        </Form>
        <p className="text-center">Already a member? <Link className="ml-2 link link-hover link-secondary capitalize" to="/login">Login</Link></p>
      </div>
    </section>
  )
}