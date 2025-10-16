import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import SignInPage from "../../pages/AuthPages/SignInPage";
import SignUpPage from "../../pages/AuthPages/SignUpPage"

// TODO Создать и импортировать сюда страницу Админа "ProfilePage"
// Логика logout прописана в NavBar

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<></>} />
          <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
          <Route path="/signin" element={<SignInPage setUser={setUser}/>} />
          {/* <Route path="/signout" element={<></>} /> */}  
          <Route path="/profile" element={<>ProfilePage user={user}</>} />  
          <Route path="*" element={<h1>Нет контента</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
