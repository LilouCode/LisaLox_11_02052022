function Card(props) {
    return (
        <div className="card">
            <img src={props.cover} alt={props.title} />
            <h2>{props.title}</h2>
        </div>
    )
}
export default Card