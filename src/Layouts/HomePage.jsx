import { useState , useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { LogoutIcon, MenuIcon, SearchhIcon, UserIcon , CloseIcon } from "../Svgs/Svgs";

const HomePage = () => {
    const {t,i18n} = useTranslation()
       const [isNavHidden, setIsNavHidden] = useState(true);

 
  const toggleNavVisibility = () => {
    setIsNavHidden(!isNavHidden);
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsNavHidden(window.innerWidth >= 1024); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return ( 
        <div className="w-screen h-full bg-primary">
            <header className="flex relative justify-between bg-[#1D1D21] items-center px-8 py-4">
            <Link>
            <h1 className="text-white text-center font-bold text-[16px] sm:text-[22px]">DZ-MOUHAMI</h1>
            </Link>

               {isNavHidden && <nav className="flex z-40 px-2 h-screen pt-8 gap-5 bg-[#1D1D21] flex-col right-0 top-0 fixed lg:mx-7 lg:flex-1 lg:justify-between lg:h-fit lg:bg-transparent lg:items-center lg:px-0 lg:gap-14 lg:flex-row lg:relative lg:pt-0">
                    <button onClick={toggleNavVisibility} className="inline self-end mr-1 lg:hidden"><CloseIcon /></button>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-end lg:gap-5">
                    <Link className="text-center">
                    <SearchhIcon />
                    <h2 className="text-white font-semibold lg:text-[17px] px-2 inline">{t("find")}</h2>
                    </Link>
                    <Link className="text-center">
                    <UserIcon />
                    <h2 className="text-white font-semibold lg:text-[17px] px-2 inline">{t("edit")}</h2>
                    </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row px-[6px] gap-5 lg:gap-2 lg:px-0">
                    <select name="lang" className="py-[6px] px-2 lg:w-[100px] rounded-lg" id="lang" placeholder="language :" value={i18n.language} onChange={(e)=>{
                     i18n.changeLanguage(e.target.value)
                         }}>
                            <option value="ar">العربية</option>
                            <option value="fr">francais</option>
                      </select>
                      <button className="bg-white text-primary rounded-lg shadow-md px-[8px] py-[5px] text-center">
                        <h2 className="inline text-xs mx-2 font-semibold mb-[6px]">{t("logout")}</h2>
                        <LogoutIcon />
                      </button>
                    </div>
                    
                </nav> }
                <button className="inline-block lg:hidden" onClick={toggleNavVisibility}><MenuIcon /></button>      
            </header>
            <Outlet />
        </div>
     );
}
 
export default HomePage;