import { Outlet } from "react-router";
import { Nav } from "../components/header/nav/Nav";
import "../styles/MainStyle.scss";

export const MainLayout = () => {
  return (
    <>
      <main>
        <Nav />
        <Outlet />
      </main>
    </>
  );
};
