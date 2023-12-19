import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, Stack } from "@mui/material";
import SideMenuButton from "./SideMenuButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { logout } from "../../../store/usersSlice";

export const DRAWER_WIDTH = 80;

export default function SideMenu() {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigation(`/login`);
  };
  const routeState = useLocation();

  const favorites = useSelector((state: RootState) => state.movies.favorites);
  const hasFavorite = favorites.length > 0;

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      className="h-full"
    >
      <Stack className="pt-10 h-[100vh] flex flex-col gap-5">
        <SideMenuButton
          label="Movies"
          isActive={
            routeState.pathname === "/" || routeState.pathname === "/movie"
              ? true
              : false
          }
          iconPath="/images/cinema.svg"
          pathname="movie"
        />
        <SideMenuButton
          label="Favorites"
          isActive={routeState.pathname === "/fav" ? true : false}
          iconPath="/images/fav.svg"
          isBadge={hasFavorite}
          pathname="fav"
        />

        <div className="flex-grow" />

        <div onClick={handleLogout}>
          <SideMenuButton
            label="Logout"
            isActive={false}
            iconPath="/images/logout.svg"
            isBadge={false}
            pathname="Logout"
          />
        </div>
      </Stack>
    </Drawer>
  );
}
