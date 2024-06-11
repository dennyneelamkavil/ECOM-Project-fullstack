import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function MyNavbar() {
  return (
    <Box component="section" sx={{ p: 3, backgroundColor: "purple" }}>
      <Stack direction="row" spacing={2} justifyContent={"space-between"} alignContent={"center"}>
        <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
          Home
        </Typography>
        <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
          Add Product
        </Typography>
        <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
          Logout
        </Typography>
      </Stack>
    </Box>
  );
}
