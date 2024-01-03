import { useState } from "react";
import { useTranslation } from "react-i18next";
const ReservationsList = () => {
  const [t, i18n] = useTranslation();
  const [reservations, setReservations] = useState([
    {
      id: 1,
      user: 1,
      lawyer: 1,
      date: "2024-02-11",
      from: "11:00",
      to: "12:00",
      description: "description",
    },
    {
      id: 2,
      user: 2,
      lawyer: 1,
      date: "2024-01-10",
      from: "11:00",
      to: "12:00",
      description: "description",
    },
  ]);

  return (
    <div className="bg-white rounded p-6 my-4">
      {/* mapping through data + accept or decline btns */}
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className="flex flex-col xs:flex-row justify-between items-center my-4  shadow-lg p-4"
        >
          <div>
            <p className="text-lg font-bold">{`${t("date")} ${reservation.date}`}</p>
            <p className="text-lg font-bold">{`${t("from")} ${reservation.from}`}</p>
            <p className="text-lg font-bold">{`${t("to")} ${reservation.to}`}</p>
            <p className="text-lg font-bold">
              {`${t("desc")} ${reservation.description}`} 
            </p>
          </div>
          <div className="w-full xs:w-fit gap-2 mt-3 flex xs:mt-0 xs:flex-col xs:gap-2">
            <button className="bg-green-700 rounded text-white px-2 py-1 flex-1 xs:flex-none">
              {t("accept")}
            </button>
            <button className="bg-red-700 rounded text-white px-2 py-1 flex-1 xs:flex-none">
            {t("decline")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationsList;
