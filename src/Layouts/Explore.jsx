import { useTranslation } from "react-i18next";
import { CoolPic } from "../Components/Svgs";
import { useState } from "react";
import LawyerCard from "../Components/LawyerCard";

const Explore = () => {
    const {t , i18n} = useTranslation()
    const {data , setData} = useState([
        {
            id : 1,
            name : "lallouche",
            address : "zighoud youcef",
            rating : 21,
            categ : "TAX",
            exp : "12 years",
            langs : "arabic",
            img : "kalwa",
        },
        {
            id : 2,
            name : "lallouche",
            address : "zighoud youcef",
            rating : 21,
            categ : "TAX",
            exp : "12 years",
            langs : "arabic",
            img : "kalwa",
        }
    ])
    const SearchIcon = ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#27272A" class={i18n.language == "ar" ? "absolute top-2 right-2 w-6 h-6" : "absolute top-2 left-2 w-6 h-6"}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        )

    return ( 
    <div className="h-full bg-primary">
        <p className="text-white font-bold uppercase text-lg text-center my-10">{t("explore")}</p>
        <div className="relative my-3 mx-16">
            <input type="text" name="search" className="rounded-xl shadow-lg w-full py-2 px-10 border-none" required placeholder={t("find")}/>
            <SearchIcon />
        </div>
        <div className="mx-16 grid grid-cols-2 justify-items-center gap-1 md:grid-cols-5">
            <select  className="select" name="category">
                <option value="" disabled selected hidden>
                {t("cate")}
                </option>
            </select>
            <select className="select" name="lang">
                 <option value="" disabled selected hidden>
                    {t("lang")}
                  </option>
            </select>
            <select className="select" name="wilaya">
                    <option value="" disabled selected hidden>
                    {t("wilaya")}
                    </option>
            </select>
            <select className="select" name="years">
                    <option value="" disabled selected hidden>
                    {t("years")}
                    </option>
            </select>
            <select className="select" name="rating">
                    <option value="" disabled selected hidden>
                    {t("rating")}
                    </option>
            </select>
        </div>
        <div className="w-full flex justify-center items-center">
           {data?.length > 0 ?
            <div>
               <h1>{t("searchresult")}</h1>
               {data?.map((lawyer)=>(
                <LawyerCard key={lawyer.id} props= {{
                    id : lawyer.id,
                    name : lawyer.name,
                    address : lawyer.address,
                    rating : lawyer.rating,
                    categ : lawyer.categ,
                    exp : lawyer.exp,
                    langs : lawyer.langs,
                    img : lawyer.img,
                }}/>
               ))}
           </div>  :
            <CoolPic />}
        </div>
    </div> );
}
 
export default Explore;