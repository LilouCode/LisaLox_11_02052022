import {useState} from 'react'
function Dropdown (props){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen? (
        <div>
            <button onClick={() => setIsOpen(false)}>
                {props.title}
            </button>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    ): (
        <div>
            <button onClick={() => setIsOpen(true)}>
                {props.title}
            </button>
        </div>
    )
}
export default Dropdown