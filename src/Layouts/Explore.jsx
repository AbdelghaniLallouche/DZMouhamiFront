import { useTranslation } from "react-i18next";
import { CoolPic } from "../Svgs/Svgs";
import { useState } from "react";
import LawyerCard from "../Components/LawyerCard";
import { SearchIcon } from "../Svgs/Svgs";
import Select from "../Components/Select";
import { Link } from "react-router-dom";

const Explore = () => {
  const [wilaya, setWilaya] = useState();
  const [wilayaselected, setWilayaselected] = useState(false);
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([
    {
      id: 1,
      name: "lallouche",
      address: "zighoud youcef",
      rating: 21,
      categ: "TAX",
      exp: "12 years",
      langs: "arabic",
      img: "kalwa",
    },
    {
      id: 2,
      name: "lallouche",
      address: "zighoud youcef",
      rating: 21,
      categ: "TAX",
      exp: "12 years",
      langs: "arabic",
      img: "kalwa",
    },
  ]);

  return (
    <div className="h-full bg-primary">
      <p className="text-white font-bold uppercase text-lg text-center my-10">
        {t("explore")}
      </p>
      <div className="relative my-3 mx-[5%]">
        <input
          type="text"
          name="search"
          className="rounded-xl shadow-lg w-full py-2 px-10 border-none"
          required
          placeholder={t("find")}
        />
        <SearchIcon txt={i18n.language} />
      </div>
      <div className="mx-[5%] grid grid-cols-2 justify-items-center gap-1 md:grid-cols-5">
        <select className="select" name="category">
          <option value="" disabled selected hidden>
            {t("cate")}
          </option>
          <option value={1}>{t("bank")}</option>
          <option value={2}>{t("tax")}</option>
          <option value={3}>{t("gpractice")}</option>
        </select>
        <select className="select" name="lang">
          <option value="" disabled selected hidden>
            {t("lang")}
          </option>
          <option value={1}>{t("ar")}</option>
          <option value={2}>{t("eng")}</option>
          <option value={3}>{t("fr")}</option>
        </select>
        <Select
          props={{
            wilaya,
            setWilaya,
            setWilayaselected,
          }}
        />
        <select className="select" name="years">
          <option value="" disabled selected hidden>
            {t("years")}
          </option>
          {[...Array(50)].map((x, i) => (
            <option key={i} value={i}>{`${i} ${t("expyear")}`}</option>
          ))}
        </select>
        <select className="select" name="rating">
          <option value="" disabled selected hidden>
            {t("rating")}
          </option>
          {[...Array(6)].map((x, i) => (
            <option key={i} value={i}>{`${i} ${t("stars")}`}</option>
          ))}
        </select>
      </div>
      <div className="w-full flex justify-center items-center">
        {data?.length > 0 ? (
          <div className="w-[90%] mx-auto">
            <h1 className="text-white text-xl font-bold my-3">
              {t("searchresult")}
            </h1>
            {data?.map((lawyer) => (
              <Link className="no-underline" to={`/lawyer/${lawyer.id}`}>
                <LawyerCard
                  key={lawyer.id}
                  props={{
                    id: lawyer.id,
                    name: lawyer.name,
                    address: lawyer.address,
                    rating: lawyer.rating,
                    categ: lawyer.categ,
                    exp: lawyer.exp,
                    langs: lawyer.langs,
                    img: lawyer.img,
                  }}
                />
              </Link>
            ))}
          </div>
        ) : (
          <CoolPic />
        )}
      </div>
    </div>
  );
};

export default Explore;
