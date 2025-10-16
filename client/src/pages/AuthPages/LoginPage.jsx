import LoginForm from "../../features/LoginForm/LoginForm";

export default function LoginPage({ setUser }) {
  
  return (
    <>
      <div>Log In Page</div>
      <div>{<LoginForm setUser={setUser} />}</div>
    </>
  );
}
