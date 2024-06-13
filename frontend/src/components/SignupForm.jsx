import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import useLoginStore from "../store/loginStore";

export default function SignupForm() {
  const {setIsLogin} = useLoginStore()

  return (
    <Box width={400} m={3} p={3} sx={{ border: "1px solid black" }}>
      <Typography variant="h4" align="center" marginBottom={2}>
        Sign Up
      </Typography>
      <Stack spacing={2}>
        <TextField label="Email" variant="outlined" />
        <TextField label="New Password" variant="outlined" />
        <TextField label="Confirm Password" variant="outlined" />
        <Button variant="contained" sx={{ width: "100%" }}>
          Sign Up
        </Button>
      </Stack>
      <Typography align="center" variant="subtitle2" marginTop={1}>
        Already have an account? <Link onClick={setIsLogin} sx={{ cursor: "pointer" }}>Login here</Link>
      </Typography>
    </Box>
  );
}



