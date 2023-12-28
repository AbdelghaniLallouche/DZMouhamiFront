import { useState } from "react";
import { useParams } from "react-router-dom";

const Generale = () => {
    const {id} = useParams()
    const [data , setData] = useState({id : id , name : "azouaou" ,wilaya : "bejaia" , commune : "amizour" , address : "21 street" , exp : "12 years licenced" , website : "jchxchx/dfdf.com" ,email : 'lawyer@gmail.com' , phone : "056262627" , diploma : "sdsd" , univ : "dhfdf" })
    return ( <div className="bg-white rounded p-6 my-4">
             <div className="h-40 w-36 bg-gray-500 rounded-xl"></div>
             <h1>{}</h1>
    </div> );
}
 
export default Generale;