import React from "react";
import { Box, Grid, Container } from "@mui/material";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = [
    "City Chicken",
    "State",
    "Email  City Chicken",
    "101781   Berlin",
  ];
  return (
    <Box py={10}>
      <div style={{ height: "400px", width: "100%" }}>
        <Container>
          <div className="block max-w-sm p-6 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl it font-style: italic font-bold tracking-tight text-gray-900 dark:text-white">
              Standort
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Wil haben zu fofgenden Uhzhretien fur Sie geoffenet.
            </p>
          </div>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.0576445056513!2d-0.12621118422928256!3d51.50072987963669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzI2LjAiTiAwwrAyMCczMi43Ilc!5e0!3m2!1sen!2sus!4v1606222251471!5m2!1sen!2sus"
          width="100%"
          height="450"
          aria-hidden="false"
        ></iframe>
        <Container>
          {" "}
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              {array?.map((i) => (
                <div key={i} className="flex justify-between space-x-96">
                  <div className="flex-1 flex-grow justify-between min-w-0 border-b-2 pb-6">
                    <p className="text-sm justify-between font-medium text-gray-900 space-x-96 truncate dark:text-white">
                      {i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Box>
  );
};

export default BerlinMap;
