import React from "react";
import styles from "./SignUpForm.module.css";
import UserApi from "../../entities/user/UserApi";
import UserValidate from "../../entities/user/UserValidate";
import { setAccessToken } from "../../shared/lib/axiosInstance";
import { useNavigate } from "react-router";

function SignUpForm({ setUser }) {
  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    try {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(e.target));
      const { isValid, err } = UserValidate.validateSignUpData(formData);

      if (!isValid) return alert(err);

      const res = await UserApi.signup(formData);

      setUser({ status: "logged", data: res.data.user });
      setAccessToken(res.data.accessToken);

      navigate("/");
    } catch (error) {
      console.log(error);
      // alert(error.response?.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={signUpHandler}>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Имя</div>
          <input className={styles.input} name="name" type="text" required />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Email</div>
          <input className={styles.input} name="email" type="email" required />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Пароль</div>
          <input
            className={styles.input}
            name="password"
            type="password"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Повтор пароля</div>
          <input
            className={styles.input}
            name="confirmPassword"
            type="password"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Подтвердить
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
