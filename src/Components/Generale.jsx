import { useState } from "react";
import { useParams } from "react-router-dom";
import RatingComponent from "./RatingComponent";
import MapComponent from "./MapComponent";

const Generale = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    position: [36.75, 5.07],
    name: "azouaou",
    wilaya: "bejaia",
    commune: "amizour",
    address: "21 street",
    exp: "12 years licenced",
    website: "jchxchx/dfdf.com",
    email: "lawyer@gmail.com",
    phone: "056262627",
    diploma: "sdsd",
    univ: "dhfdf",
  });
  return (
    <div className="bg-white rounded p-6 my-4 ">
      <div className="sm:flex sm:justify-start sm:items-start sm:gap-6">
        <div className="pb-4 my-4 w-full border-b-[1px] border-black sm:border-none sm:w-fit sm:py-0">
          <div className="h-40 w-36 bg-gray-500 rounded-xl mx-auto sm:mx-0"></div>
        </div>

        <div className="pb-4 my-4 w-full border-b-[1px] border-black sm:border-none sm:w-fit sm:py-0">
          <div>
            <h1>{data.name}</h1>
            <p>{`${data.address} , ${data.commune} , ${data.wilaya}`}</p>
            <RatingComponent />
            <p>{data.exp}</p>
            <p>{data.diploma}</p>
            <p>{data.univ}</p>
          </div>
        </div>

        <div className="pb-4 my-4 w-full border-b-[1px] border-black sm:border-none sm:w-fit sm:py-0 flex-1 sm:flex sm:flex-col sm:items-end">
          <div className="flex-1 sm:flex sm:flex-col sm:items-end">
            <p>{data.website}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto p-1 border-black border-solid border-[1.5px] rounded-md mt-3">
        <p className="text-sm font-semibold mb-1">Location :</p>
        <MapComponent props={{ position: data.position, setPosition: null }} />
      </div>
    </div>
  );
};

export default Generale;
