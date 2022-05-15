function Tag(props) {
    console.log(props.text.length)
    return(
        <h5 className={(props.text.length < 13? "tag": "tag tag--XL")}>{props.text}</h5>
    )
} 
export default Tag