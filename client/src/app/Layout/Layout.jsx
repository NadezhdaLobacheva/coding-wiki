import NavBar from "../../widgets/NavBar/NavBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
