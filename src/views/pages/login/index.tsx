import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { AppDispatch } from "../../../store";
import { login } from "../../../store/usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textField: {
    backgroundColor: "white",
    color: "black",
    "& input": {
      color: "black",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white", // Underline color when textfield is inactive
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "white", // Underline color when hovered
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white", // Underline color when textfield is active (focused)
    },
  },
});

export default function Login() {
  const navigation = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const classes = useStyles();

  const mockUser = {
    username: "ittipol",
    password: "123456789",
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === mockUser.username && password === mockUser.password) {
      dispatch(login({ email, password, isLogin: true, id: "mockUserId" }));
      navigation(`/movie`);
    } else {
      navigation(`/login`);
    }
  };

  return (
    <div className="w-full flex flex-row flex-grow">
      <div className="w-full xl-max:w-2/3 px-[20px] sm:px-12 md:px-18 lg:px-32 pt-[72px] md:pt-14 flex flex-col justify-between flex-grow">
        <form onSubmit={handleSubmit} className="flex-1 ml-[1px] mt-[1px]">
          <Typography variant="h5" component="div" className="mb-[16px]">
            Login
          </Typography>
          <TextField
            variant="standard"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            className={`${classes.textField} px-10 py-2 mt-[12px] rounded-lg`}
          />

          <TextField
            variant="standard"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            className={`${classes.textField} px-10 py-2 my-[24px] rounded-lg`}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="rounded-lg"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
