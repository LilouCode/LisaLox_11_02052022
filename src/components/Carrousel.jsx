import { useState } from "react"
function Carrousel (props){
    const [pictureShown, changePicture] = useState(0);
    
    return(
        <div className="carrousel">
            <button className="carrousel__btn carrousel__btn__prev" onK onClick={ () => changePicture(pictureShown===0? props.pics.length -1: pictureShown -1)}></button>
            <img src={props.pics[pictureShown]} alt={props.alt} />
            <h6>{(pictureShown +1) +"/"+(props.pics.length)}</h6>
            <button className="carrousel__btn carrousel__btn__next" onClick={ () => changePicture(pictureShown===props.pics.length - 1? 0: pictureShown +1)}></button>
        </div>
    )
}

export default Carrousel