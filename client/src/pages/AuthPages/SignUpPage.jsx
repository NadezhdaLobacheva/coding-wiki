import SignUpForm from "../../features/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
  return <div>{<SignUpForm setUser={setUser} />}</div>;
}
