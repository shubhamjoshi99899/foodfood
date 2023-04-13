import React from "react";
import { Grid } from "@mui/material";
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
      openTime: "",
      closeTime: "",
    },
    {
      name: "Play",
      openTime: "16:00",
      closeTime: "19:00",
    },
  ];
  return (
    <div>
      <div>
        <div className="block max-w-sm p-6 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl it font-style: italic font-bold tracking-tight text-gray-900 dark:text-white">
            Offnungszeiten
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Wil haben zu fofgenden Uhzhretien fur Sie geoffenet.
          </p>
        </div>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left  dark:text-gray-400">
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
        <Grid item xs={4}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left  dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="border-b">
                  <th scope="col" className="px-6 py-3">
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
        <Grid item xs={4}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left  dark:text-gray-400">
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
