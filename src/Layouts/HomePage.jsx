import { useState , useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
    const {t,i18n} = useTranslation()
    const SearchIcon = ()=>(
        <svg className="inline mb-1 w-[17px] h-[17px] sm:h-[22px] sm:w-[22px]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 28L22.2 22.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> )
        const UserIcon = ()=>(
            <svg className="inline mb-1 w-[17px] h-[17px] sm:h-[22px] sm:w-[22px]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3333 28V25.3333C25.3333 23.9188 24.7714 22.5623 23.7712 21.5621C22.771 20.5619 21.4145 20 20 20H12C10.5855 20 9.22895 20.5619 8.22875 21.5621C7.22856 22.5623 6.66666 23.9188 6.66666 25.3333V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
        const LogoutIcon = ()=>(
            <svg width="17" className="inline mb-1" height="17" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.6667 19.8333L24.5 14L18.6667 8.16663" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.5 14H10.5" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
         const MenuIcon = ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
       )
       const CloseIcon = ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
       )


       const [isNavHidden, setIsNavHidden] = useState(true);

  // Function to toggle the navigation visibility
  const toggleNavVisibility = () => {
    setIsNavHidden(!isNavHidden);
  };

  // Effect to hide the navigation on component mount if the screen size is not lg
  useEffect(() => {
    const handleResize = () => {
      setIsNavHidden(window.innerWidth >= 1024); // Assuming lg is 1024 pixels or more
    };

    handleResize(); // Initial check
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
                    <SearchIcon />
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