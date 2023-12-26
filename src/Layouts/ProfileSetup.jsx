import { useState , useRef } from "react";
import { useTranslation } from "react-i18next";
import Sectionone from "../Sections/Section1";
import Sectiontwo from "../Sections/Section2";
import Sectionthree from "../Sections/Section3";
import Sectionfour from "../Sections/Section4";
import { Link } from "react-router-dom";

const ProfileSetup = () => {
    const [acceptterms , setAcceptterms] = useState(false)
    const [position, setPosition] = useState([36.66342747875744 ,4.91264820098877]);
    const [practicearea , setPracticearea] = useState([false,false,false]) //[arab,english,frnch]
    const [languages , setLanguages] = useState([false,false,false])//[depth , tax , general]
    const {t, i18n} = useTranslation()
    const [image, setImage] = useState()
    const [wilayaselected , setWilayaselected] = useState(false)
    const [commune , setCommune] = useState()
    const [wilaya , setWilaya] = useState()
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [year , setYear] = useState()

    const ArrowIcon = ({lang})=>(
        <svg width="20" className={lang == 'ar' ? "rotate-180 inline ml-1 mr-7" : "inline mr-1 ml-7"} height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12L14 5V9H3V15H14V19L21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

 
    return ( 
        <div className="w-screen bg-primary overflow-x-hidden">
            <header>
                <h1 className="text-white text-2xl font-bold mx-6 pt-4">{t("setprofile")}</h1>
                <ArrowIcon lang={i18n.language}/>
                <p className="txt inline mx-[3px] font-semibold">{t("soussetprofile")}</p>
            </header>
            
            <Sectionone props={{
                position , setImage ,image ,setPosition , wilayaselected , setWilayaselected , commune , setCommune , wilaya , setWilaya , selectedFile , setSelectedFile , fileInputRef , year , setYear
            }}/>

            <Sectiontwo props= {{setLanguages , setPracticearea , practicearea , languages}} />

            <Sectionthree />

            <Sectionfour />

            <section className="flex justify-end gap-2 m-10 items-center">
                <label className="text-white font-semibold text-sm" htmlFor="terms">{t("terms")}</label>
                <input type="checkbox"  id="terms" onChange={(e)=>{
                    setAcceptterms(!acceptterms)
                }} />
                <button className="buttonwhite font-semibold disabled:text-gray-500 bg-slate-400" disabled = {!acceptterms} >{t("submit")}</button>
            </section>

            <footer className={i18n.language == "ar" ? "bg-[#1D1D21] p-10 text-center sm:text-start": "bg-[#1D1D21] p-10 text-center sm:text-end"}>
              <ul className="flex items-center gap-3 mb-3 mt-1">
                <li className="list-none">
                <Link className="text-white text-sm underline">{t("privacy")}</Link>
                </li>
                <li className="list-none">
                <Link className="text-white underline text-sm">{t("uset")}</Link>
                </li>
                <li className="list-none">
                <Link className="text-white text-sm underline">{t("community")}</Link>
                </li>
                <li className="list-none">
                <Link className="text-white text-sm underline">{t("sitemap")}</Link>
                </li>
              </ul>
              <p className="txt text-end">{t("rights")}</p>
            </footer>


        </div>
     );
}
 
export default ProfileSetup;