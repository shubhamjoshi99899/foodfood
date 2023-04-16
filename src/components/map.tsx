import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = ["City Chicken", "Email  City Chicken", "101781   Berlin"];
  return (
    <Box py={10}>
      <div style={{ height: "400px", width: "100%" }}>
        <Container maxWidth="md" sx={{ px: "0 !important" }}>
          <div>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#3B3A4A ",
                fontSize: "32px",
                fontWeight: 400,
                fontFamily: "Contrail One !important",
                mb: 4,
              }}
            >
              Standort
            </Typography>
          </div>
        </Container>
        <iframe
          width="100%"
          height="450"
          aria-hidden="false"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDIw0poJUjxwPSV3FkMnDnppLdNBT_72ZY
    &q=Space+Needle,Seattle+WA"
        ></iframe>
        <Container>
          {" "}
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              <Stack
                direction={"row"}
                sx={{ borderBottom: "1px solid #f1f1f1 ", pb: 2 }}
                justifyContent={"space-around"}
              >
                <Typography>City Chicken</Typography>
                <Typography>{""}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ borderBottom: "1px solid #f1f1f1 ", pb: 2 }}
                justifyContent={"space-around"}
              >
                <Typography>Sonnennalle</Typography>
                <Typography>35</Typography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ borderBottom: "1px solid #f1f1f1 ", pb: 2 }}
                justifyContent={"space-around"}
              >
                <Typography>E-mail</Typography>
                <Typography>city.chicken@google.com</Typography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ borderBottom: "1px solid #f1f1f1 ", pb: 2 }}
                justifyContent={"space-around"}
              >
                <Typography>10178</Typography>
                <Typography>Berlin</Typography>
              </Stack>
            </div>
          </div>
        </Container>
      </div>
    </Box>
  );
};

export default BerlinMap;
