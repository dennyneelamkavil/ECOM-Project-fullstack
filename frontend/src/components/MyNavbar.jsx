import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MyNavbar() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  return (
    <Box component="section" sx={{ p: 3, backgroundColor: "purple" }}>
      <Stack direction="row" spacing={2} justifyContent={"space-between"} alignContent={"center"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
            Home
          </Typography>
        </Link>
        <Link to="/add-form" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
            Add Product
          </Typography>
        </Link>
        <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }} onClick={toLogin}>
          Logout
        </Typography>
      </Stack>
    </Box>
  );
}
