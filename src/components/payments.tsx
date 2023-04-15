import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PeopleIcon from "@mui/icons-material/People";
import CakeIcon from "@mui/icons-material/Cake";
import ParkIcon from "@mui/icons-material/Park";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Grid, Stack, Typography } from "@mui/material";
const data = [
  {
    name: "Visa",
    icon: "/14.svg  ",
  },
  {
    name: "Mastercard",
    icon: "/6.svg",
  },
  {
    name: "American Express",
    icon: "/3.svg",
  },
  {
    name: "PayPal",
    icon: "/4.svg",
  },
  {
    name: "Apple Pay",
    icon: "/16.svg",
  },
  {
    name: "Google Pay",
    icon: "/15.svg",
  },

  {
    name: "Skrill",
    icon: "/7.svg",
  },
  {
    name: "Neteller",
    icon: "/8.svg",
  },
  {
    name: "Venmo",
    icon: "/9.svg",
  },
  {
    name: "Zelle",
    icon: "/9.svg",
  },
  {
    name: "Square",
    icon: "/9.svg",
  },
  {
    name: "Stripe",
    icon: "/5.svg",
  },
  {
    name: "Amazon Pay",
    icon: "/11.svg",
  },
  {
    name: "Dwolla",
    icon: "/12.svg",
  },
  {
    name: "Braintree",
    icon: "/13.svg",
  },
  {
    name: "2Checkout",
    icon: "/14.svg",
  },
];
const Payments = () => {
  return (
    <div>
      <div>
        <Typography sx={{ color: "#838383" }}>
          Sie können bei ins vor Ort mit <br /> folgenden Zahlungsmittel zahlen:
        </Typography>
      </div>
      <Grid py={8} container>
        {data.map((data) => (
          <Grid
            py={2}
            key={data.name}
            direction={"row"}
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            sx={{}}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              sx={{
                borderBottom: "1px solid #f1f1f1",
                mx: 2,
                paddingBottom: "10px",
              }}
              gap={2}
            >
              <img src={data.icon} />
              <Typography
                fontWeight={400}
                sx={{ fontSize: "12px", fontFamily: "Inter" }}
              >
                {data.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Payments;
