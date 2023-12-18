import { useLocation } from "react-router-dom";
import { Drawer, Stack } from "@mui/material";

import SideMenuButton from "./SideMenuButton";

export const DRAWER_WIDTH = 80;

export default function SideMenu() {
  const routeState = useLocation();
  const styles = {
    deskTopToolbar: {
      minHeight: "88px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
    logoToolbar: {
      minHeight: "88px",
    },
    logo: {
      maxWidth: "calc(100% - 30px",
      width: "70px",
      height: "auto",
    },
    menuContainer: {
      paddingTop: "40px",
    },
  };

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
    >
      <Stack style={styles.menuContainer}>
        <SideMenuButton
          label="Movies"
          isActive={
            routeState.pathname === "/" ||
            routeState.pathname === "/movie" ||
            routeState.pathname === "/fav"
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
          isBadge={true}
          pathname="fav"
        />
      </Stack>
      <div className="flex-1" />
    </Drawer>
  );
}
