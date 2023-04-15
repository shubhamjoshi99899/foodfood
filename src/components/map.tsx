import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = ["City Chicken", "Email  City Chicken", "101781   Berlin"];
  return (
    <Box py={10}>
      <div style={{ height: "400px", width: "100%" }}>
        <Container>
          <div className="block max-w-sm p-6 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl it font-style: italic font-bold tracking-tight text-gray-900 dark:text-white">
              Standort
            </h5>
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
