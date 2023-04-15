import React from "react";
import { Grid, Typography } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Timings = () => {
  const days = [
    {
      name: "Monday",
      openTime: "09:00",
      closeTime: "22:00",
    },
    {
      name: "Tuesday",
      openTime: "09:00",
      closeTime: "22:00",
    },
    {
      name: "Wednesday",
      openTime: "09:00",
      closeTime: "22:00",
    },

    {
      name: "Thursday",
      openTime: "09:00",
      closeTime: "22:00",
    },
    {
      name: "Friday",
      openTime: "09:00",
      closeTime: "22:00",
    },
    {
      name: "Saturday",
      openTime: "09:00",
      closeTime: "22:00",
    },
    {
      name: "Sunday",
      openTime: "09:00",
      closeTime: "22:00",
    },
  ];
  const pause = [
    {
      name: "Pause",
      openTime: "16:00",
      closeTime: "19:00",
    },
    {
      name: "",
      openTime: "-",
      closeTime: "-",
    },
    {
      name: "",
      openTime: "-",
      closeTime: "-",
    },
    {
      name: "Pause",
      openTime: "16:00",
      closeTime: "19:00",
    },
    {
      name: "",
      openTime: "-",
      closeTime: "-",
    },
    {
      name: "",
      openTime: "-",
      closeTime: "-",
    },

    {
      name: "Pause",
      openTime: "16:00",
      closeTime: "19:00",
    },
  ];
  return (
    <div>
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
            Öffnungszeiten
          </Typography>
          <Typography sx={{ color: "#838383", mb: 5 }}>
            Wir haben zu folgenden Uhrzeiten <br /> für Sie geöffnet.
          </Typography>
        </div>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4}>
          <div className="relative overflow-x-auto">
            <table
              style={{ fontFamily: "Inter" }}
              className="w-full text-sm text-left  dark:text-gray-400"
            >
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="border-b">
                  <th scope="col" className="px-6 py-3">
                    Ladenzeiten
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <MeetingRoomIcon />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <DoorFrontIcon />
                  </th>
                </tr>
              </thead>
              {days?.map((day, index) => (
                <tbody key={index}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4"> {day.name}</td>
                    <td className="px-6 py-4">{day.openTime}</td>
                    <td className="px-6 py-4">{day.closeTime}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="relative overflow-x-auto">
            <table
              style={{ fontFamily: "Inter" }}
              className="w-full text-sm text-left  dark:text-gray-400"
            >
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="border-b">
                  <th
                    scope="col"
                    style={{ fontFamily: "Inter" }}
                    className="px-6 py-3"
                  >
                    Pausenzieten
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <PauseIcon />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <PlayArrowIcon />
                  </th>
                </tr>
              </thead>
              {pause?.map((day, index) => (
                <tbody key={index}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4"> {day.name}</td>
                    <td className="px-6 py-4">{day.openTime}</td>
                    <td className="px-6 py-4">{day.closeTime}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="relative overflow-x-auto">
            <table
              style={{ fontFamily: "Inter" }}
              className="w-full text-sm text-left  dark:text-gray-400"
            >
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="border-b">
                  <th scope="col" className="px-6 py-3">
                    Kuchenzeiten
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <WhatshotIcon />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <LocalFireDepartmentIcon />
                  </th>
                </tr>
              </thead>
              {days?.map((day, index) => (
                <tbody key={index}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4"> {day.name}</td>
                    <td className="px-6 py-4">{day.openTime}</td>
                    <td className="px-6 py-4">{day.closeTime}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timings;
