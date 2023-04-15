import React from "react";
import {
  Container,
  Typography,
  Divider,
  Button,
  Grid,
  Box,
} from "@mui/material";
import GoogleDeviceImage from "./google-device-image.png";
import AndroidDeviceImage from "./android-device-image.png";
import GooglePlayStoreButton from "./google-play-store-button.png";
import AppleAppStoreButton from "./apple-app-store-button.png";

const AvailableOnSection: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start" },
          }}
        >
          <div>
            <div className="py-10 px-4 bg-white   rounded-lg text-left">
              <p style={{ fontSize: "30px", fontStyle: "italic" }}>
                Speiskarte
              </p>
            </div>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Nulla non finibus massa.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 2,
              }}
            ></Box>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: { xs: 2, sm: 0 },
            }}
          >
            <Grid container spacing={15}>
              <Grid item xs={12} sm={12} md={6}>
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4_1JPxBqdSfm0yTNU4rYnVZ5XUBIPexSx4_FwNx9EEaUCzi6qcnXEwBRZ7IO5lgnH1trBKEzivcg&usqp=CAc"
                  }
                  alt="Google Device"
                  style={{ height: 280 }}
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="ongoing meeting"
                  className="w-60 obejct-fit object-center object-fill h-20"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <img
                  src={
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSU4dWRp3OkMdPusEojJ1_rqKOr5CGqbZjPET2eOo1y6KWMsQFkv3tu-PlO7JkJUBJ_u8sMeaAH5b6cf8A5TZU7Cbx-TbKK4wk-mICm_1fc6FgCI3E3aYXPpysPqaavRxcew8Ww&usqp=CAc"
                  }
                  alt="Android Device"
                  style={{ height: 280 }}
                />

                <img
                  src="https://w7.pngwing.com/pngs/918/845/png-transparent-google-play-logo-google-play-app-store-android-google-play-text-logo-sign.png"
                  alt="ongoing meeting"
                  className="w-60 obejct-fit object-center object-fill h-20"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AvailableOnSection;
