import NavBar from "../../widgets/NavBar/NavBar";
import { Outlet } from "react-router";

export default function Layout({setUser, user}) {
  return (
    <div>
      <NavBar setUser={setUser} user={user}/>
      <Outlet />
    </div>
  );
}
