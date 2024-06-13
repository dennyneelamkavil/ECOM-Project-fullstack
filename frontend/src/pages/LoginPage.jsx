import { Box } from "@mui/material";
import MyLoginForm from "../components/MyLoginForm";
import SignupForm from "../components/SignupForm";
import useLoginStore from "../store/loginStore";

export default function LoginPage() {
  const { isLogin } = useLoginStore();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
        {isLogin ? <MyLoginForm /> : <SignupForm />}
      </Box>
    </>
  );
}
