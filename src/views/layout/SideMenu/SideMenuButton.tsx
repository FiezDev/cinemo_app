import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";

interface SideMenuButtonProps {
  iconPath?: string; // Accept the path to the icon as a prop
  label?: string;
  isActive?: boolean;
  isBadge?: boolean;
  pathname?: string;
}

export default function SideMenuButton({
  label = "",
  isActive = false,
  isBadge = false,
  pathname = "",
  iconPath = "", // Provide a default value for the iconPath prop
}: SideMenuButtonProps) {
  const navigation = useNavigate();
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer px-2 mb-3 mt-3 mx-4 md:mb-5 md:mt-1 md:mx-0 text-white"
      onClick={() => navigation(`/${pathname}`)}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Badge
        className="menuBadge"
        color="info"
        variant="dot"
        invisible={!isBadge}
      >
        {iconPath && (
          <img
            className={isActive ? "" : "opacity-60"}
            src={iconPath}
            alt="icon"
            style={{ width: "35px", height: "35px" }} // Set fixed width and height
          />
        )}
      </Badge>
      {isActive || isHover ? (
        <div className="text-xs hidden md:block" style={{ marginTop: "5px" }}>
          {label}
        </div>
      ) : (
        <div
          className="text-xs text-transparent hidden md:block"
          style={{ marginTop: "5px" }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
