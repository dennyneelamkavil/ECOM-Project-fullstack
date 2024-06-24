import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import useLoginStore from "../store/loginStore";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../apis";

export default function MyLoginForm() {
  const { setIsLogin } = useLoginStore();
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const toLogin = async (data) => {
    try {
      const res = await login(data)
      toast.success(res.data.message)
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
      reset();
    }
  };

  return (
    <Box width={400} m={3} p={3} sx={{ border: "1px solid black" }}>
      <Typography variant="h4" align="center" marginBottom={2}>
        Login
      </Typography>
      <Stack
        component={"form"}
        onSubmit={handleSubmit(toLogin)}
        spacing={2}
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <TextField label="Email" variant="outlined" sx={{ width: "100%" }} {...register("email")} />
        <TextField label="Password" variant="outlined" sx={{ width: "100%" }} {...register("password")} />
        <Button variant="contained" sx={{ width: "60%" }} type="submit">
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
