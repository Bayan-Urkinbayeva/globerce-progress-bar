const Header = (props) => {
    return ( 
    <div className="header">
        <div className="title">
            <h1>Основные требования</h1>
        </div>  
        <div className="tabs">
            <button className={`btn1 + ${props.isshow===2 ? 'b2' : 'b1'} `} onClick={props.click1} >Для заемщика</button>
            <button className={`btn2 + ${props.isshow===1 ? 'b2' : 'b1'} `} onClick={props.click2}>Для продавца</button>
        </div>
    </div>
     );
}
 
export default Header;