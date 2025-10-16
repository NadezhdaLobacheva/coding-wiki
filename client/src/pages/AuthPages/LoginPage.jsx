import LoginForm from "../../features/LoginForm/LoginForm";

export default function LoginPage({ setUser }) {
  return <div>{<LoginForm setUser={setUser} />}</div>;
}
