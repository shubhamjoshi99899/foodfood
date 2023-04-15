import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PeopleIcon from "@mui/icons-material/People";
import CakeIcon from "@mui/icons-material/Cake";
import ParkIcon from "@mui/icons-material/Park";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PetsIcon from "@mui/icons-material/Pets";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StrollerIcon from "@mui/icons-material/Stroller";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Grid, Stack, Typography } from "@mui/material";
const data = [
  { service: "Bar", icon: <LocalBarIcon /> },
  { service: "Power backup", icon: <Battery2BarIcon /> },
  { service: "Pool", icon: <PoolIcon /> },
  { service: "Airport", icon: <AirlineSeatLegroomExtraIcon /> },
  { service: "Party", icon: <PeopleIcon /> },
  { service: "Nature", icon: <ParkIcon /> },
  { service: "Birthday", icon: <CakeIcon /> },
  { service: "Music", icon: <MusicNoteIcon /> },
  { service: "Pets", icon: <PetsIcon /> },
  { service: "Reservation", icon: <EventAvailableIcon /> },
  { service: "Kindergerechtt", icon: <StrollerIcon /> },
  { service: "Raucherbereich", icon: <SmokingRoomsIcon /> },
  { service: "Zum Mitnehmen", icon: <BusinessCenterIcon /> },
];
const Service = () => {
  return (
    <div>
      <div>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#3B3A4A ",
            fontSize: "32px",
            fontWeight: 400,
            fontFamily: "Contrail One !important",
          }}
        >
          Service
        </Typography>
        <br />
        <Typography sx={{ color: "#838383", mb: 5 }}>
          In unserem Restaurant <br /> werden Ihnen XXX, XXX <br /> und XXX
          Speisen serviert.
        </Typography>
        <Typography sx={{ color: "#838383", mb: 3 }}>
          Als Service bieten wir Ihnen <br /> folgende Leistungen an:
        </Typography>
      </div>
      <Grid container>
        {data.map((data) => (
          <Grid
            py={4}
            key={data.service}
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
              {data.icon}
              <Typography
                fontWeight={400}
                sx={{ fontSize: "12px", fontFamily: "Inter" }}
              >
                {data.service}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Service;
