const LawyerCard = ({props}) => {
    const {id , name , address ,rating ,categ ,exp ,langs ,img } = props;
    return ( 
    <div className="w-[80%] h-60 bg-white flex justify-start items-center">
        <div className="w-40 h-full bg-slate-500 rounded-2xl">
        </div>
        <div>
        <h1>{name}</h1>
        <p>{address}</p>
        <p>{rating}</p>
        <p>{categ}</p>
        <p>{exp}</p>
        <p>{langs}</p>
        </div>
    </div> );
}
 
export default LawyerCard;