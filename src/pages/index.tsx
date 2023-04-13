import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Divider,
} from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/common/custom-button";
import theme from "@/styles/theme";
import About from "@/components/about";
import SliderComponent from "@/components/home-slider";
import MobileApplication from "@/components/mobile-application";
import Service from "@/components/service";
import Payments from "@/components/payments";
import Timings from "@/components/timings";
import BerlinMap from "@/components/map";

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("restaurant");

  useEffect(() => {
    const handleScroll = () => {
      const restaurant: any = document.getElementById("restaurant");
      const speisekarte: any = document.getElementById("speisekarte");
      const services: any = document.getElementById("services");
      const offnungszeiten: any = document.getElementById("offnungszeiten");
      const standort: any = document.getElementById("standort");

      if (
        offnungszeiten?.offsetTop <=
          window.pageYOffset + window.innerHeight / 2 &&
        offnungszeiten?.offsetTop + offnungszeiten?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("offnungszeiten");
      } else if (
        services?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        services?.offsetTop + services?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("services");
      } else if (
        speisekarte?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        speisekarte?.offsetTop + speisekarte?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("speisekarte");
      } else if (
        standort?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        standort?.offsetTop + standort?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("standort");
      } else if (
        restaurant?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        restaurant?.offsetTop + restaurant?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("restaurant");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = [
    "restaurant",
    "speisekarte",
    "services",
    "offnungszeiten",
    "standort",
  ];
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "#333",
          boxShadow: "none",
          display: "flex",
          flexDirection: { md: "row", sm: "column" },
          textAlign: "center",
          flexGrow: 1,
          maxHeight: "80px",
        }}
      >
        <>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <img
              src="/logo.png"
              style={{ width: "400px", height: "80px" }}
              alt="climateChange"
            />
          </Box>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "row", sm: "row" },
              alignItems: { xs: "center" },
              backgroundColor: "#DD2E35",
              flexGrow: 1,
            }}
          >
            <Typography
              textAlign={"left"}
              sx={{
                p: 3,
                flexGrow: 1,
                color: "#fff",
                fontStyle: "italic",
                fontSize: "20px",
              }}
            >
              City Chicken <br /> since 1960s
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: { xs: 2, sm: 0 },
                flexGrow: 1,
              }}
            >
              <Box>
                {buttons?.map((button) => (
                  <Button
                    key={button}
                    color="inherit"
                    sx={{
                      float: "left",
                      marginRight: 2,
                      textTransform: "capitalize   !important",
                      color: "#fff",
                      fontFamily: "inter",
                      marginBottom: { xs: 0, sm: 0, md: -4 },
                    }}
                    onClick={() => handleSectionClick(`${button}`)}
                  >
                    {button}
                    {activeSection == `${button}` && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 2,
                          left: 0,
                          right: 0,
                          height: 3,
                          backgroundColor: "yellow",
                          color: "#fff",
                        }}
                      />
                    )}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
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
                color="#fff"
                sx={{
                  color: "#fff !important",
                  height: "40px",
                  width: "2px !important",
                  mx: 1,
                  mt: 4,
                }}
              />
              <Typography mt={4} mr={5} sx={{ color: "#fff" }}>
                Food Food <br /> Business Partner
              </Typography>
            </Box>
          </Toolbar>
        </>
      </AppBar>

      <section id="restaurant" style={{}}>
        <Box sx={{ pt: 0 }}>
          <Box
            sx={{
              backgroundImage: 'url("/Restaurant.png")',
              backgroundSize: "cover",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: 0,
              width: "100%",
            }}
          ></Box>
        </Box>
      </section>
      <section id="speisekarte" style={{}}>
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <About />
          <SliderComponent />
        </Container>
      </section>
      <section id="services" style={{}}>
        <Container maxWidth="lg" sx={{ pt: 10 }}>
          <MobileApplication />
          <Service />
        </Container>
      </section>
      <section
        id="offnungszeiten"
        style={{ backgroundColor: "#fff", minHeight: "100vh" }}
      >
        <Container maxWidth="lg" sx={{ pt: 10 }}>
          <Payments />
        </Container>
        <Container maxWidth="lg" sx={{ pt: 10 }}>
          <Timings />
        </Container>
      </section>
      <section
        id="standort"
        style={{ backgroundColor: "#fff", minHeight: "100vh" }}
      >
        <Box>
          <BerlinMap />
        </Box>
      </section>
    </Box>
  );
};

export default LandingPage;
