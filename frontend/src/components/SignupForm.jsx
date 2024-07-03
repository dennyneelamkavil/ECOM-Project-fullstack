import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import useLoginStore from "../store/loginStore";
import { useForm } from "react-hook-form";
import { signup } from "../apis";
import { toast } from "react-toastify";

export default function SignupForm() {
  const { setIsLogin } = useLoginStore();
  const { handleSubmit, register, reset } = useForm();

  const toSignup = async (data) => {
    try {
      const res = await signup(data);
      toast.success(res.data.message);
      setIsLogin()
    } catch (error) {
      toast.error(error.response.data.message);
      reset();
    }
  };

  return (
    <Box width={400} m={3} p={3} sx={{ border: "1px solid black" }}>
      <Typography variant="h4" align="center" marginBottom={2}>
        Sign Up
      </Typography>
      <Stack
        component={"form"}
        onSubmit={handleSubmit(toSignup)}
        spacing={2}
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <TextField label="Email" variant="outlined" sx={{ width: "100%" }} {...register("email")} />
        <TextField label="New Password" variant="outlined" sx={{ width: "100%" }} />
        <TextField label="Confirm Password" variant="outlined" sx={{ width: "100%" }} {...register("password")} />
        <Button variant="contained" sx={{ width: "60%" }} type="submit">
          Sign Up
        </Button>
      </Stack>
      <Typography align="center" variant="subtitle2" marginTop={1}>
        Already have an account?{" "}
        <Link onClick={setIsLogin} sx={{ cursor: "pointer" }}>
          Login here
        </Link>
      </Typography>
    </Box>
  );
}
