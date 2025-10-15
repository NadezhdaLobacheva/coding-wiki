import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  // TODO: Сделать условный рендеринг в зависимости от авторизован или нет
  // TODO: Исправить роуты для авторизации / регистрации / выхода при необходимости
  // TODO: Добавить имя пользователя и переход в личный кабинет по нему

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">CODING WIKI</Navbar.Brand>
        <Nav>
          <NavLink to={"/"} className="nav-link">
            Словарь
          </NavLink>
          <NavLink to={"/signup"} className="nav-link">
            Регистрация
          </NavLink>
          <NavLink to={"/signin"} className="nav-link">
            Войти
          </NavLink>
          <NavLink to={"/signout"} className="nav-link">
            Выйти
          </NavLink>
          <NavLink to={"/profile"} className="nav-link">
            [Имя]
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
