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
        <section className="rental section">
            <Carrousel pics={rental.pictures} alt={rental.title +" "+ rental.location}/>
            <div className="rental__section">
                <div className="rental__heading">
                    <h1 className="rental__heading rental__heading__title">{rental.title}</h1>
                    <h2 className="rental__heading rental__heading__subtitle">{rental.location}</h2>
                </div>
                <div className="host">
                    <h3 className="host__name">{rental.host.name}</h3>
                    <img className="host__picture" src={rental.host.picture} alt={rental.host.name} />
                </div>
                <div className="rental__tags">
                    {rental.tags?.map((tag) => (
                        <Tag key={tag + id} text= {tag}/>
                    ))}
                </div>
                <Rate className = {"rental__stars stars--" + rental.rating}/>
            </div>

            <div className="rental__details">
                <Dropdown className= "dropdown" title ="Description" description={rental.description}/>
                <Dropdown className= "dropdown" title= "Équipements" description= {<ul>
                    {rental.equipments?.map((equipment) =>(
                    <li key={rental.id + equipment}>{equipment}</li>
                ))}
                </ul>}/>
            </div>
            
        </section>
    )
}
export default Rental