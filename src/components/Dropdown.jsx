import {useState} from 'react'
function Dropdown (props){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen? (
        <div className={props.className}>
            <button className='dropdown--closed' onClick={() => setIsOpen(false)}>
                {props.title}
            </button>
            <div>
                <h5>{props.description}</h5>
            </div>
        </div>
    ): (
        <div className={props.className}>
            <button className='dropdown--open' onClick={() => setIsOpen(true)}>
                {props.title}
            </button>
        </div>
    )
}
export default Dropdown