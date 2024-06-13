import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import useLoginStore from "../store/loginStore";

export default function MyLoginForm() {
  const { setIsLogin } = useLoginStore();

  return (
    <Box width={400} m={3} p={3} sx={{ border: "1px solid black" }}>
      <Typography variant="h4" align="center" marginBottom={2}>
        Login
      </Typography>
      <Stack spacing={2} sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <TextField label="Email" variant="outlined" sx={{ width: "100%" }} />
        <TextField label="Password" variant="outlined" sx={{ width: "100%" }} />
        <Button variant="contained" sx={{ width: "60%" }}>
          Login
        </Button>
      </Stack>
      <Typography align="center" variant="subtitle2" marginTop={1}>
        Don't have an account?{" "}
        <Link onClick={setIsLogin} sx={{ cursor: "pointer" }}>
          Sign Up here
        </Link>
      </Typography>
    </Box>
  );
}
