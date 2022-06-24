const Card = (props) => {
    return (
        <div className="blocks">
        {props.datas.map((data) => (
    <div className="block" key={data.id} >
        <h4>{data.title}</h4>
        <p>{data.content}</p>
    </div>
    ))}
    </div>
     );
}
 
export default Card;