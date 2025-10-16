import React, { useState } from "react";
import SignUpForm from "../../features/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <div>Sign Up Page</div>
      <div>{<SignUpForm setUser={setUser} />}</div>
    </>
  );
}
