import { useParams } from "react-router-dom";
import {rentalsList} from "../datas/rentalsList"
import Carrousel from "../components/Carrousel";
import Dropdown from '../components/Dropdown';
import Rate from "../components/Rate";
import Tag from "../components/Tag";

function Rental (){
    let {id} = useParams()
    let rental;
    const rentalId = rentalsList.filter(
        (rentals) => rentals.id.includes(id)
    );
    rental = rentalId[0]
    console.log(rental)
    return(
        <div>
            <Carrousel/>
            <div>
                <div>
                    <h1>{rental.title}</h1>
                    <h2>{rental.location}</h2>
                </div>
                <div>
                    <h3>{rental.host.name}</h3>
                    <img src={rental.host.picture} alt={rental.host.name} />
                </div>
            </div>
            <div>
                <div>
                    {rental.tags?.map((tag) => (
                        <Tag key={tag + id} text= {tag}/>
                    ))}
                </div>
                <Rate className = {"stars--" + rental.rating}/>
            </div>

            <div>
                <Dropdown title ="Description" description={rental.description}/>
                <Dropdown title= "Équipements" description= {<ul>
                    {rental.equipments?.map((equipment) =>(
                    <li key={rental.id + equipment}>{equipment}</li>
                ))}
                </ul>}/>
            </div>
            
        </div>
    )
}
export default Rental