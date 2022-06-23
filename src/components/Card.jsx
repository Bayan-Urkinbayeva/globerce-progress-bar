const Card = (props) => {
    return (
        <div className="blocks">
        {props.data.map((dat) => (
    <div className="block" key={dat.id} >
        <h4>{dat.title}</h4>
        <p>{dat.content}</p>
    </div>
    ))}
    </div>
     );
}
 
export default Card;