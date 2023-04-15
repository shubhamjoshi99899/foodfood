import { Divider, Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./common/custom-button";
import theme from "@/styles/theme";

const MobileApplication = () => (
  <div>
    <section className="px-6 xl:px-0">
      <div className="mt-52 mx-auto container">
        <div className="flex items-center justify-center w-full">
          <div className="pt-14">
            <div className="container mx-auto">
              <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div className="py-5 px-4 bg-white   rounded-lg text-left">
                    <p>Speiskarte</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque consequuntur fugit nisi explicabo voluptas placeat
                      quod et,
                    </p>
                  </div>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <CustomButton
                        sx={{
                          maxWidth: "98px",
                          width: "100%",
                          fontFamily: "League Spartan !important",
                          fontSize: "0.875rem",
                          borderRadius: "8px !important",
                          color: "#000",
                          padding: "10px 20px",
                          backgroundColor: "#D9D9D9 !important",
                          boxShadow: "none",

                          "&:hover": {
                            backgroundColor: "#fff !important",
                            boxShadow: "none",
                            border: "1px solid #C4C4C4",
                            color: theme.palette.text.primary,
                          },
                          mt: 4,
                        }}
                        size="small"
                        text="Logo"
                        variant="contained"
                        type="submit"
                      />
                    </Box>
                    <Divider
                      orientation="vertical"
                      color="#000"
                      sx={{
                        color: "#000 !important",
                        height: "40px",
                        width: "2px !important",
                        mx: 1,
                        mt: 4,
                      }}
                    />
                    <Typography
                      mt={4}
                      mr={5}
                      fontWeight={600}
                      sx={{ color: "#000" }}
                    >
                      foodfood <br />{" "}
                      <span style={{ fontFamily: "600", fontSize: "14px" }}>
                        Business Partner
                      </span>
                    </Typography>
                  </Box>
                </div>

                <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 mb-4 px-6">
                  <div className="py-5 px-4 border-x-stone-600  rounded-lg text-left">
                    <div className="hidden lg:flex border-r-black lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4_1JPxBqdSfm0yTNU4rYnVZ5XUBIPexSx4_FwNx9EEaUCzi6qcnXEwBRZ7IO5lgnH1trBKEzivcg&usqp=CAc"
                        alt="ongoing meeting"
                        className="w-72 obejct-fit object-center object-fill h-full"
                      />
                    </div>

                    <button className="mt-5 w-full text-indigo-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white  px-8 py-3 text-base font-semibold py-3">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                        alt="ongoing meeting"
                        className="w-60 obejct-fit object-center object-fill h-20"
                      />
                    </button>
                  </div>
                </div>

                <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div className="py-5 px-4 bg-white  rounded-lg text-left">
                    <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                      <img
                        src="https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg"
                        alt="ongoing meeting"
                        className="w-full obejct-fit object-center object-fill h-full"
                      />
                    </div>
                    <button className="mt-5 w-full text-indigo-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white-100 px-8 py-3 text-base font-semibold py-3">
                      <img
                        src="https://w7.pngwing.com/pngs/918/845/png-transparent-google-play-logo-google-play-app-store-android-google-play-text-logo-sign.png"
                        alt="ongoing meeting"
                        className="w-60 obejct-fit object-center object-fill h-20"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: "",
              }}
            />
          </div>
        </div>
      </div>
    </section>

    <style>
      {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
    </style>
  </div>
);
export default MobileApplication;
