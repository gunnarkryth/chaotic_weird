import { Outlet } from "react-router";
import { Nav } from "./nav/Nav";

export const Header = () => {
  return (
    <header>
      <Nav />
      <Outlet />
    </header>
  );
};
