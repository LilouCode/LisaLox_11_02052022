import { useState } from "react"
function Carrousel (props){
    const [pictureShown, changePicture] = useState(0);
    
    return(
        <div>
            <button onClick={ () => changePicture(pictureShown===0? props.pics.length -1: pictureShown -1)}></button>
            <img src={props.pics[pictureShown]} alt={props.alt} />
            <button onClick={ () => changePicture(pictureShown===props.pics.length - 1? 0: pictureShown +1)}></button>
        </div>
    )
}

export default Carrousel