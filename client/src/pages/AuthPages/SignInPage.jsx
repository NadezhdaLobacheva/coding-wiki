import React, { useState } from "react";
import LoginForm from "../../features/LoginForm/LoginForm";

export default function SignInPage({ setUser }) {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <div>Log In</div>
      <div>{<LoginForm setUser={setUser} />}</div>
    </>
  );
}
