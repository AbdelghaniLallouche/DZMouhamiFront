import { useTranslation } from "react-i18next";
import { GoogleIcon } from "../Svgs/Svgs";

const WelcomePage = () => {
  const {t , i18n} = useTranslation()

    return ( 
      
        <div className="flex justify-start items-center flex-col md:flex-row h-screen w-screen bg-white">

          <div className="bg-primary h-full flex justify-center items-center w-full p-2 lg:w-[60%]">
           <div className="max-w-xl">
           <h1 className="uppercase font-bold text-4xl mb-1 text-white">{t("title")}</ h1>
            <p className="text-white text-sm mb-2">{t("welcometext")}</p>
            <p className="text-white text-sm">{t("welcometxt")}</p>
           </div>  
          </div>
          <div className= {i18n.language == 'fr' ? " hidden md:block w-[100px] h-screen bg-primary welcome ml-[-1px]" : "hidden md:block w-[100px] h-screen bg-primary welcome mr-[-1px] rotate-180"}></div>
          <div className="flex relative flex-col w-full items-center lg:flex-1 justify-center h-full">
            <select className="absolute top-4 right-6 pr-4 pb-1" name="lang" id="lang" placeholder="language :" value={i18n.language} onChange={(e)=>{
                 i18n.changeLanguage(e.target.value)
            }}>
                <option value="ar">العربية</option>
                <option value="fr">francais</option>
            </select>
            <div className="sm:w-[300px] w-[250px] text-center">
                <button className="bg-primary py-2 mb-2 w-full text-white rounded text-center">
                  <span>{t("glogin")}</span>
                  <GoogleIcon color={'white'}/>
                </button>
                <button className="bg-white border-2 rounded border-primary w-full py-1 ">
                  <span>{t("gloginlaw")}</span>
                  <GoogleIcon color={'#27272A'}/>
               </button>
            </div>
          </div>
        </div>
     );
}
 
export default WelcomePage;