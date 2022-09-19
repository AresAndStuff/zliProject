import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useState } from "react";


export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 400,
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Login</b>
          </Typography>
          <Typography level="body2">Login to continue</Typography>
        </div>
        <TextField
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          label="Email"
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.email && <span className="err">{error.email}</span>}
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.password && <span className="err">{error.password}</span>}
        <Button
          sx={{
            mt: 1,
          }}
        >
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don't have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}
