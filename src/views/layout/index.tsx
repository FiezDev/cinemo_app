import { Outlet, useLocation } from "react-router-dom";
import Container from "./Container";
import SideMenu from "./SideMenu";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

export default function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const { currentUser, isLoading } = useSelector(
    (state: RootState) => state.users
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser && !isLoginPage) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="overflow-x-hidden bg-dark-black sm:bg-medium-gray">
      {!isLoginPage && <SideMenu />}
      <div className="ml-0 md:ml-20">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
