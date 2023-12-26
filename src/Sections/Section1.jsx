import { useTranslation } from "react-i18next";
import MapComponent from "../Components/MapComponent";
import Select from "../Components/Select";
import SelectCom from "../Components/SelectCom";
import SelectYear from "../Components/SelectYear";

const Sectionone = ({props}) => {
    const {t, i18n} = useTranslation()
    const {position ,setImage , image,setPosition , wilayaselected , setWilayaselected , commune , setCommune , wilaya , setWilaya , selectedFile , setSelectedFile , fileInputRef , year , setYear} = props;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };
        
        const UploadIcon = ()=>(
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 8L12 3L7 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 3V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        )


    return ( 
        <section>
        <h2 className="h2">{t("general")}</h2>
                <form method="post" className="bg-white mx-10 p-5 justify-items-center items-center rounded-2xl my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <div className="relative w-[150px] h-[200px] rounded-lg md:self-center md:justify-self-center bg-slate-600 lg:row-span-5 lg:col-span-1 md:col-span-1 md:row-start-2 md:row-span-4 sm:col-span-2">
                    {selectedFile && <img className="w-full h-full object-cover bg-center" src={URL.createObjectURL(selectedFile)} alt="Selected" />}
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                        <button type="none" 
                        className="absolute bottom-[-12px] right-[-12px] rounded-full bg-primary text-white p-3 text-center" 
                        onClick={() => fileInputRef.current.click()}>
                            <UploadIcon />
                        </button>
                    </div>

                    <input type="text" className="btn lg:col-span-2 md:col-span-1 sm:col-span-2" name="fname" required placeholder={t("fname")}/>
                    <input type="text" name="lname" className="btn lg:col-span-2 md:col-span-2" required placeholder={t("lname")}/>
                    <input type="text" name="address" className="btn lg:col-span-2" required placeholder={t("address")}/>
                    <Select props={{wilaya , setWilaya , setWilayaselected}}/>
                    <SelectCom props={{wilaya ,setCommune}}/> 
                    <input type="text" name="univ" className="btn" required placeholder={t("university")} />
                    <input type="text" name="diploma" required className="btn lg:col-span-2" placeholder={t("diploma")} />
                    <SelectYear props={{setYear , type : "obt"}} />
                    <input type="email" className="btn lg:col-span-2" placeholder={t("email")} required name="email"/>
                    <input type="tel" className={i18n.language == "ar" ? "btn lg:col-span-2 text-end" : "btn lg:col-span-2 text-start"} placeholder={t("phone")} required name="phone"/>
                    <input type="url" className="btn lg:col-span-4 md:col-span-3" placeholder={t("website")} name="website" />
                    <div>
                    </div>
                    <div className="sm:col-span-2 md:col-span-3 lg:col-span-5 border-solid border-primary border-[2px] rounded-xl">
                        <MapComponent props={{position , setPosition}} />
                    </div>
                </form>
                </section>
     );
}
 
export default Sectionone;