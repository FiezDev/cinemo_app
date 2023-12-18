import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here, e.g., calling an API to authenticate the user.
  };

  return (
    <div className="w-full flex flex-row flex-grow">
      <div className="w-full xl-max:w-2/3 px-[20px] sm:px-12 md:px-18 lg:px-32 pt-[72px] md:pt-14 flex flex-col justify-between flex-grow">
        <form onSubmit={handleSubmit} className="flex-1 ml-[1px] mt-[1px]">
          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "16px" }}
          >
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: "12px" }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            sx={{ marginBottom: "24px" }}
          />
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
