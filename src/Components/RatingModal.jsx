import { useTranslation } from "react-i18next";
import { CloseIcon } from "../Svgs/Svgs";
const RatingModal = ({ close , rating }) => {
  const { t } = useTranslation();
  return (
    <div className="h-screen overlay flex justify-center items-center">
      <div className="p-6 bg-primary relative rounded-md">
        <button
          className="absolute top-1 end-1"
          onClick={() => {
            close(false);
          }}
        >
          <CloseIcon />
        </button>

        <h1 className="text-white text-xl font-semibold me-5">{`${t(
          "addreview"
        )} :`}</h1>
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-semibold">
              {t("desc")}
            </label>
            <textarea className="w-full h-24 rounded-md p-2 bg-white focus:outline-none"></textarea>
          </div>
          <div className="flex justify-end">
            <button className="text-primary rounded-md shadow-md w-full text-base bg-white font-semibold">
              {t("add")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
