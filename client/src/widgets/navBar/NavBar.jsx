import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import UserApi from "../../entities/user/UserApi";

export default function NavBar({ setUser, user }) {
 
  
  // TODO: Добавить  имя пользователя (добавлено) и переход в личный кабинет по нему (не осуществлён)

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
        <Navbar.Brand href="#home"> CODING WIKI for {user.status === "logged" ? `${user.data.name}` : "All"}</Navbar.Brand>
        <Nav className="me-auto">

          <NavLink to={"/"} className="nav-link">
            Словарь
          </NavLink>
          
          <NavLink to={"/signout"} className="nav-link">
            Поиск
          </NavLink>

          <NavLink to={"/profile"} className="nav-link">
            [for Admin]
          </NavLink>
            </Nav>

            {/* <Nav>
          <NavLink to={"/signup"} className="nav-link">
            Регистрация /
          </NavLink>
        </Nav> */}

 {user.status !== "logged" && (
          <NavLink to={"/signup"} className="nav-link" style={{ color: "white" }}>
            Регистрация и 
          </NavLink>
        )}
        {user.status === "logged" && (
          <Button variant="dark"></Button>
        )}

        {user.status !== "logged" && (
          <NavLink to={"/login"} className="nav-link" style={{ color: "white" }}>
          ли Вход
          </NavLink>
        )}
        {user.status === "logged" && (
          <Button variant="light" onClick={logoutHandler}>
            Выйти
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
