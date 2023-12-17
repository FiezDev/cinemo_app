import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Api from "../../../service/Api";

export default function Tags() {
  const navigation = useNavigate();

  useEffect(() => {
    Api()
      .get("https://avl-frontend-exam.herokuapp.com/api/tags")
      .then(() => {})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full flex flex-row">
      <div className="w-full px-[13px] sm:px-[50px] md:px-[100px] lg:px-[100px] xl:px-[245px] pt-[80px] md:pt-[65px]">
        <Stack spacing={2}>
          <div className="md:hidden flex flex-row items-center ml-[12px] md:ml-[-21px] mt-[-63px] mb-[22px]">
            <ArrowBackIosIcon
              fontSize="medium"
              onClick={() => navigation("/")}
              className="cursor-pointer mr-[10px] h-[24px] text-white"
            />
            <Typography className="text-[24px] md:text-[30px]">
              Home Page
            </Typography>
          </div>
          <Typography className="text-[24px] md:text-[30px] ml-[7px] md:ml-[12px]">
            Tags
          </Typography>
        </Stack>
      </div>
    </div>
  );
}
