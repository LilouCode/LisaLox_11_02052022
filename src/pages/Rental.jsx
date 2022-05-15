import { useParams } from "react-router-dom";
import {rentalsList} from "../datas/rentalsList"
import Carrousel from "../components/Carrousel";
import Dropdown from '../components/Dropdown';
import Rate from "../components/Rate";
import Tag from "../components/Tag";
import starEmpty from "../assets/starEmpty.svg";
import starFill from "../assets/starFill.svg";

function Rental (){
    let {id} = useParams()
    let rental;
    const rentalId = rentalsList.filter(
        (rentals) => rentals.id.includes(id)
    );
    rental = rentalId[0]
    console.log(rental)
    let fill = [];
    for (let i = 0; i< rental.rating; i++){
        fill.push(i)
    }
    let empty = [];
    const noRate = 5 - rental.rating;
    for (let i= 0; i< noRate; i++){
        empty.push(i)
    }
    return(
        <section className="section">
            <Carrousel pics={rental.pictures} alt={rental.title +" "+ rental.location}/>
            <div className="rental">
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
                <div className="rating">
                {fill?.map((i) => (
                    <Rate key={"fill"+i} src= {starFill}/>
                ))}
                {empty?.map((i) => (
                    <Rate key={"empty"+i} src= {starEmpty}/>
                ))}
                </div>
            </div>

            <div className="rental__details">
                <Dropdown className= "rental__details__dropdown dropdown" title ="Description" description={rental.description}/>
                <Dropdown className= "rental__details__dropdown dropdown" title= "Équipements" description= {<ul>
                    {rental.equipments?.map((equipment) =>(
                    <li key={rental.id + equipment}>{equipment}</li>
                ))}
                </ul>}/>
            </div>
            
        </section>
    )
}
export default Rental