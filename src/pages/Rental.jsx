import { useParams } from "react-router-dom";
import {rentalsList} from "../datas/rentalsList"

function Rental (){
    let {id} = useParams()
    let rental;
    rental = rentalsList.filter(
        (rentals) => rentals.id.includes(id)
    );
    console.log(rental)
    return(
        <div>
            <h1>{rental[0].title}</h1>
        </div>
    )
}
export default Rental