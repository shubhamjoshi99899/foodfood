import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const LandingPageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/Restaurant.png")',
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: 0,
}));

const LandingPage: React.FC = () => {
  return <LandingPageContainer></LandingPageContainer>;
};

export default LandingPage;
