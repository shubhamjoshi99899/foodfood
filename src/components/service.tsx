import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PeopleIcon from "@mui/icons-material/People";
import CakeIcon from "@mui/icons-material/Cake";
import ParkIcon from "@mui/icons-material/Park";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
const data = [
  { service: "Bar", icon: <LocalBarIcon /> },
  { service: "Power backup", icon: <Battery2BarIcon /> },
  { service: "Pool", icon: <PoolIcon /> },
  { service: "Airport", icon: <AirlineSeatLegroomExtraIcon /> },
  { service: "Party", icon: <PeopleIcon /> },
  { service: "Nature", icon: <ParkIcon /> },
  { service: "Birthday", icon: <CakeIcon /> },
  { service: "Music", icon: <MusicNoteIcon /> },
];
const Service = () => {
  return (
    <div>
      <div>
        <div className="block max-w-sm p-6 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Services
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <p className="font-normal mt-0 text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
            {data.map((data: any) => (
              <div key={data.service}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 pb-5">{data.icon}</div>
                  <div className="flex-1 min-w-0 border-b-2 pb-6">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {data.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
