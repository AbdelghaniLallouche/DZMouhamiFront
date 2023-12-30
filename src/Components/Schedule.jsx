import { t } from "i18next";
import { useState } from "react";

const Schedule = () => {
  const [data, setData] = useState([
    { id: 1, lawyer: 1, day: "sunday", from: "8:00", to: "15:00" },
    { id: 2, lawyer: 1, day: "monday", from: "8:00", to: "17:00" },
    { id: 3, lawyer: 1, day: "tuesday", from: "8:00", to: "15:00" },
    { id: 4, lawyer: 1, day: "wednesday", from: "8:00", to: "17:00" },
    { id: 5, lawyer: 1, day: "thursday", from: "8:00", to: "15:00" },
    { id: 6, lawyer: 1, day: "saturday", from: "8:00", to: "17:00" },
  ]);
  return (
    <div className="bg-white rounded p-6 my-4 ">
      <h1 className="hh">{t("avaible")}</h1>
      <div>
        {data.map((day, index) => (
          <div className="flex justify-start items-center gap-2">
            <div className="button w-full">{t(`${day.day}`)}</div>
            <div className="py-1 px-2 text-start border-solid border-primary border-[1px] rounded w-full text-primary">
              {day.from}
            </div>
            <div className="py-1 px-2 border-solid text-start border-primary border-[1px] rounded w-full text-primary">
              {day.to}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
