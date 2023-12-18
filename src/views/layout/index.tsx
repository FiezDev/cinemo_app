import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function Layout() {
  return (
    <div className="overflow-x-hidden bg-dark-black sm:bg-medium-gray">
      <Header />
      <div className="">
        <SideMenu />
        <div className="ml-0 md:ml-20">
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
}
