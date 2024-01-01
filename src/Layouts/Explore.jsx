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
  const [category, setCategory] = useState();
  const [lang, setLang] = useState();
  const [years, setYears] = useState();
  const [rating, setRating] = useState();
  const [name, setName] = useState();
  const { t, i18n } = useTranslation();
  const [issearch , setIssearch] = useState(false);
  const [filtreddata, setFiltreddata] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "lallouche",
      wilaya : "Alger",
      commune : "Alger centre",
      address: "zighoud youcef",
      rating: 5,
      categ: 2,
      exp: 12,
      langs: 1,
      img: "kalwa",
    },
    {
      id: 2,
      name: "lallouche",
      wilaya : "Constantine",
      commune : "Zighoud youcef",
      address: "zighoud youcef",
      rating: 5,
      categ: 2,
      exp: 12,
      langs: 1,
      img: "kalwa",
    },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    setIssearch(true);
   console.log(`${wilaya} ${category} ${lang} ${years} ${rating} ${name}`)
   let filtered = data.filter((lawyer) => {
    if (
      lawyer.name.toLowerCase().includes(name.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  if (category) {
    filtered = filtered.filter((lawyer) => lawyer.categ == category);
  }
  if (lang) {
    filtered = filtered.filter((lawyer) => lawyer.langs == lang);
  }
  if (years) {
    filtered = filtered.filter((lawyer) => lawyer.exp == years);
  }
  if (rating) {
    filtered = filtered.filter((lawyer) => lawyer.rating == rating);
  }
  if (wilaya) {
    filtered = filtered.filter((lawyer) => lawyer.address == wilaya);
  }
  setFiltreddata(filtered);
  }

  return (
    <div className="h-full bg-primary">
      <p className="text-white font-bold uppercase text-lg text-center my-10">
        {t("explore")}
      </p>
      <div className="relative my-3 mx-[5%]">
        <input
          type="text"
          onChange={(e)=>{
            setName(e.target.value)
          }}
          value={name}
          name="search"
          className="rounded-xl shadow-lg w-full py-2 px-10 border-none"
          required
          placeholder={t("find")}
        />
        <SearchIcon txt={i18n.language} />
      </div>
      <div className="mx-[5%] grid grid-cols-2 justify-items-center gap-1 md:grid-cols-6">
        <select onChange={(e)=>{
          setCategory(e.target.value)
        }} className="select" name="category">
          <option value="" disabled selected hidden>
            {t("cate")}
          </option>
          <option value={1}>{t("bank")}</option>
          <option value={2}>{t("tax")}</option>
          <option value={3}>{t("gpractice")}</option>
        </select>
        <select onChange={(e)=>{
          setLang(e.target.value)
        }} className="select" name="lang">
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
        <select onChange={(e)=>{
          setYears(e.target.value)
        }} className="select" name="years">
          <option value="" disabled selected hidden>
            {t("years")}
          </option>
          {[...Array(50)].map((x, i) => (
            <option key={i} value={i}>{`${i} ${t("expyear")}`}</option>
          ))}
        </select>
        <select onChange={(e)=>{
          setRating(e.target.value)
        }} className="select" name="rating">
          <option value="" disabled selected hidden>
            {t("rating")}
          </option>
          {[...Array(6)].map((x, i) => (
            <option key={i} value={i}>{`${i} ${t("stars")}`}</option>
          ))}
        </select>
        <button onClick={(e)=>{
          handleSearch(e);
          console.log(filtreddata)
        }} className="bg-white text-primary text-base font-semibold w-full text-center rounded-lg transition duration-[0.5s] ease-in-out hover:bg-green-700 hover:text-white">{t("search")}</button>
      </div>
      <div className="w-full flex justify-center items-center">
        {issearch == true && filtreddata?.length > 0 ? (
          <div className="w-[90%] mx-auto">
            <h1 className="text-white text-xl font-bold my-3">
              {t("searchresult")}
            </h1>
            {filtreddata?.map((lawyer) => (
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
