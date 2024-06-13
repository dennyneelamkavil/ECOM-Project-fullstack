import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyTable from "../components/MyTable";
import { Box, Container, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Box margin={5} padding={3} component={Paper} elevation={6} sx={{ backgroundColor: "#f0f0f0" }}>
          <MyTable />
        </Box>
      </Container>
    </>
  );
}
