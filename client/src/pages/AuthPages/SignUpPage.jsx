import SignUpForm from "../../features/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
 
  return (
    <>
      <div>Sign Up Page</div>
      <div>{<SignUpForm setUser={setUser} />}</div>
    </>
  );
}
