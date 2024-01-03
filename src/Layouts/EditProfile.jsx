import { useContext , useState , useRef } from "react"; 
import { userContext } from "../Context/UserContextProvider";
import { useTranslation } from "react-i18next";
import Sectionone from "../Sections/Section1";
import Sectiontwo from "../Sections/Section2";
import Sectionthree from "../Sections/Section3";
import Sectionfour from "../Sections/Section4";
import { ArrowwIcon } from "../Svgs/Svgs";


const EditProfile = () => {
    const {user} = useContext(userContext)
    const [data , setData] = useState({
        id : user.id,
        firstname : "aaa",
        lastname : "aaa",
        address : "aaa",
        wilaya : "aaa",
        commune : "aaa",
        univ : "aaa",
        diploma : "aaa",
        obtdate : "2000",
        phone : "00000000",
        email : "aaa@gmail.com",
        website : "aaa.com",
        position : [0,0],
        languages : [false,false,false],
        practicearea : [false,false,false],
        image : "aaa",
        cost : 0,
        per : "hour",
        desciptions : [
            {
                id : 1,
                title : "aaa",
                description : "aaa"
            },
            {
                id : 2,
                title : "aaa",
                description : "aaa"
            },
            {
                id : 3,
                title : "aaa",
                description : "aaa"
            }
        ],
        schedue : [
            {id : 1 , day : "sunday" , from : "00:00" , to : "00:00"},
            {id : 2 , day : "monday" , from : "00:00" , to : "00:00"},
            {id : 3 , day : "tuesday" , from : "00:00" , to : "00:00"},
            {id : 4 , day : "wednesday" , from : "00:00" , to : "00:00"},
            {id : 5 , day : "thursday" , from : "00:00" , to : "00:00"},
            {id : 6 , day : "saturday" , from : "00:00" , to : "00:00"},
        ]
    })
    const [position, setPosition] = useState(data.position);
      const [practicearea, setPracticearea] = useState(data.practicearea); //[arab,english,frnch]
      const [languages, setLanguages] = useState(data.languages); //[depth , tax , general]
      const { t, i18n } = useTranslation();
      const [image, setImage] = useState(data.image);
      const [wilayaselected, setWilayaselected] = useState(true);
      const [commune, setCommune] = useState(data.commune);
      const [wilaya, setWilaya] = useState(data.wilaya);
      const [selectedFile, setSelectedFile] = useState(null);
      const fileInputRef = useRef(null);
      const [year, setYear] = useState(data.obtdate);

    return ( 
        
             <div className="w-screen bg-primary overflow-x-hidden">
      <header>
        <h1 className="text-white text-2xl font-bold mx-6 pt-4">
          {t("editprofile")}
        </h1>
        <ArrowwIcon lang={i18n.language} />
        <p className="txt inline mx-[3px] font-semibold">
          {t("soussetprofile")}
        </p>
      </header>

      <Sectionone
        props={{
          position,
          setImage,
          image,
          setPosition,
          wilayaselected,
          setWilayaselected,
          commune,
          setCommune,
          wilaya,
          setWilaya,
          selectedFile,
          setSelectedFile,
          fileInputRef,
          year,
          setYear,
        }}
      />

      <Sectiontwo
        props={{ setLanguages, setPracticearea, practicearea, languages }}
      />

      <Sectionthree />

      <Sectionfour />

      

    
    </div>
            
        
     );
}
 
export default EditProfile;