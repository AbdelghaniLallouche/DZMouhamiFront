import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const {t , i18n} = useTranslation()
  const GoogleIcon = ({color})=>(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline mx-2"  xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.50004C10.7789 5.50031 9.58252 5.84456 8.548 6.49334C7.51348 7.14213 6.68263 8.06921 6.15066 9.16837C5.61869 10.2675 5.4071 11.4943 5.54014 12.7082C5.67317 13.922 6.14546 15.0739 6.90288 16.0317C7.66029 16.9896 8.67221 17.7147 9.8227 18.124C10.9732 18.5333 12.2157 18.6103 13.4079 18.346C14.6001 18.0818 15.6938 17.4871 16.5636 16.63C17.4334 15.773 18.0442 14.6882 18.326 13.5H13C12.6022 13.5 12.2206 13.342 11.9393 13.0607C11.658 12.7794 11.5 12.3979 11.5 12C11.5 11.6022 11.658 11.2207 11.9393 10.9394C12.2206 10.6581 12.6022 10.5 13 10.5H20C20.3978 10.5 20.7794 10.6581 21.0607 10.9394C21.342 11.2207 21.5 11.6022 21.5 12C21.5 14.1968 20.7387 16.3257 19.3457 18.0242C17.9526 19.7228 16.014 20.8862 13.8598 21.3162C11.7055 21.7462 9.4688 21.4164 7.53037 20.3829C5.59194 19.3493 4.0716 17.6759 3.22815 15.6476C2.3847 13.6192 2.27027 11.3612 2.90434 9.25794C3.53841 7.15469 4.88179 5.33618 6.7058 4.11196C8.52981 2.88775 10.7217 2.33349 12.9084 2.54354C15.0951 2.7536 17.1414 3.71498 18.699 5.26404C18.8387 5.40298 18.9496 5.56806 19.0254 5.74987C19.1013 5.93168 19.1406 6.12665 19.1411 6.32365C19.1416 6.52065 19.1033 6.71582 19.0284 6.89802C18.9535 7.08022 18.8434 7.24588 18.7045 7.38554C18.5656 7.5252 18.4005 7.63612 18.2187 7.71198C18.0369 7.78785 17.8419 7.82715 17.6449 7.82766C17.247 7.82869 16.8651 7.67164 16.583 7.39104C15.9808 6.79023 15.266 6.31399 14.4797 5.98953C13.6933 5.66506 12.8507 5.49873 12 5.50004Z" fill={color}/>
                    </svg> )
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