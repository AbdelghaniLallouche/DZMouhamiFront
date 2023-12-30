import { useTranslation } from "react-i18next";

const Sectionfour = () => {
  const { t, i18n } = useTranslation();
  const times = [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  const days = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
  ];
  return (
    <section>
      <h2 className="h2">{t("shedule")}</h2>
      <form
        className="grid grid-cols-2 items-center content-center mt-2 sm:grid-cols-3 gap-y-3 p-6 bg-white rounded-xl shadow-md mx-10 my-2;"
        method="post"
      >
        {days.map((day, i) => (
          <>
            {" "}
            <div className="button place-self-center w-[150px] col-span-2 sm:col-span-1">
              {t(day)}
            </div>
            <div className="col-span-2 flex justify-start gap-3">
              <select required className="select">
                <option value="" disabled selected hidden>
                  {t("from")}
                </option>
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <select required className="select">
                <option value="" disabled selected hidden>
                  {t("to")}
                </option>
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </>
        ))}
      </form>
    </section>
  );
};

export default Sectionfour;
