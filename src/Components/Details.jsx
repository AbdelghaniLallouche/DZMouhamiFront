import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams()
    return ( <div>
        <h1 className="text-white text-lg">{id}</h1>
    </div> );
}
 
export default Details;