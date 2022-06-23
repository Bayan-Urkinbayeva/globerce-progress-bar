import Card from "./Card"
import ProgressBar from "./progressBar"
const Body = (props) => {
    const data1 = [
    {id: 1, title: "Заголовок 1", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {id: 2, title: "Заголовок 2", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {id: 3, title: "Заголовок 3", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {id: 4, title: "Заголовок 4", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {id: 5, title: "Заголовок 5", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    
    ]
    const data2 = [
        {id: 1,title: "Заголовок 1", content: "Another content"},
        {id: 2,title: "Заголовок 2", content: "Another content"},
        {id: 3,title: "Заголовок 3", content: "Another content"},
        {id: 4, title: "Заголовок 4", content: "Another content"},
        {id: 5, title: "Заголовок 5", content: "Another content"},
        ]

    window.onscroll = () => {
        
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        let myBar = document.getElementById("myBar");
        if(scrolled>=5 && scrolled <= 20 ){
            myBar.style.height  = 20 + "%";
        }
        else if(scrolled >= 20 && scrolled <= 40){
            myBar.style.height  = 40 + "%";
        }
        else if(scrolled >= 40 && scrolled <= 60){
            myBar.style.height  = 60 + "%";
        }
        else if(scrolled >= 60 && scrolled <= 80){
            myBar.style.height  = 80 + "%";
        }
        else if(scrolled >= 80 && scrolled <= 100){
            myBar.style.height  = 100 + "%";
        }
        else if(scrolled===0){
            myBar.style.height  = "0%";
        }
    }
    return ( 
        <div className="body">
            <ProgressBar circles={data1} />
            {props.isshow ===1 ? 
            <Card data={data1} />
            :
            <Card data={data2} />
}
        </div>
     );
}
 
export default Body;