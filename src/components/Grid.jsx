import { Link } from 'react-router-dom'
import {rentalsList} from '../datas/rentalsList'
import Card from './Card'
function Grid() {
    return (
      <div className="grid">
        {rentalsList?.map((rental) =>(
          <Link key={rental.id} to={`/rental/${rental.id}`}>
            <Card
              cover={rental.cover}
              title = {rental.title}
            />
          </Link>
        ))}
      </div>
    )
  }
  
  export default Grid