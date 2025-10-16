import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import UserApi from "../../entities/user/UserApi";

export default function NavBar({ setUser, user }) {
  // TODO: Добавить  имя пользователя (добавлено) и переход в личный кабинет çпо нему (не осуществлён)

  const logoutHandler = async () => {
    try {
      await UserApi.logout();
      setUser({ status: "logging", data: null }); //  not guest
    } catch (error) {
      console.log("Logout error: ", error);
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">CODING WIKI</Navbar.Brand>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {user.status === "logged" ? (
            <>
              <NavLink to={"/"} className="nav-link" style={{ color: "white" }}>
                {user.data.name}
              </NavLink>
              <NavLink
                onClick={logoutHandler}
                className="nav-link"
                style={{ color: "white" }}
              >
                Выйти
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"/signup"}
                className="nav-link"
                style={{ color: "white" }}
              >
                Регистрация
              </NavLink>
              <NavLink
                to={"/login"}
                className="nav-link"
                style={{ color: "white" }}
              >
                Вход
              </NavLink>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}
