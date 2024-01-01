const ReservationsList = () => {
    const [reservations , setReservations] = useState([
        {
            id: 1,
            user: 1,
            lawyer: 1,
            date: "2022:11:11",
            from: "11:00",
            to: "12:00",
            description: "description",
          },
          {
            id: 1,
            user: 1,
            lawyer: 1,
            date: "2022:11:11",
            from: "11:00",
            to: "12:00",
            description: "description",
          },
    ])
    return ( 
        <div className="bg-white rounded p-6 my-4">
            {/* mapping through data + accept or decline btns */}
        </div>
     );
}
 
export default ReservationsList;