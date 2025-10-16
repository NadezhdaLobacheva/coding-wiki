import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import LoginPage from "../../pages/AuthPages/LoginPage";
import SignUpPage from "../../pages/AuthPages/SignUpPage";
import ContentPage from "../../pages/ContentPage/ContentPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

// TODO Создать и импортировать сюда страницу Админа "ProfilePage"
// Логика logout прописана в NavBar

export default function Router({ user, setUser }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout setUser={setUser} user={user} />}>
          <Route path="/" element={<ContentPage user={user} />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          {/* <Route path="/logout" element={<></>} />   */}
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="*" element={<h1>Нет контента</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
