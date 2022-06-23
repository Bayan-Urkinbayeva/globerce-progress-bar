const ProgressBar = (props) => {
    return ( 
        <div className="scroller">
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
                <div className="circles">
                    {props.circles.map((circle) => (
                <div key={circle.id} className="progress-container-circle">{circle.id}</div>
                   ))}
                </div>
            </div>
     );
}
 
export default ProgressBar;