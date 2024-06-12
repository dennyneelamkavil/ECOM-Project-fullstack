import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function MyLoginForm() {
  return (
    <Box width={400} m={3} p={3} sx={{ border: "1px solid black" }}>
      <Typography variant="h4" align="center" marginBottom={2}>
        Login
      </Typography>
      <Stack spacing={2}>
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button variant="contained" sx={{ width: "100%" }}>
          Login
        </Button>
      </Stack>
      <Typography align="center" variant="subtitle2" marginTop={1}>
        Don't have an account? <Link sx={{ cursor: "pointer" }}>Sign Up here</Link>
      </Typography>
    </Box>
  );
}


