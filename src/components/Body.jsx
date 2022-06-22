import Card from "./Card"
const Body = (props) => {
    const data1 = [
    {title: "Заголовок 1", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {title: "Заголовок 2", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {title: "Заголовок 3", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {title: "Заголовок 4", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    {title: "Заголовок 5", content: "Задача организации, в особенности же начало повседневной работы по формированию"},
    ]
    const data2 = [
        {title: "Заголовок 1", content: "Another content"},
        {title: "Заголовок 2", content: "Another content"},
        {title: "Заголовок 3", content: "Another content"},
        {title: "Заголовок 4", content: "Another content"},
        {title: "Заголовок 5", content: "Another content"},
        ]
    window.onscroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        let progressBar = document.getElementById("myBar");
        if(scrolled>=5 && scrolled <= 20 ){
            progressBar.style.height  = 20 + "%";
        }
        else if(scrolled >= 20 && scrolled <= 40){
            progressBar.style.height  = 40 + "%";
        }
        else if(scrolled >= 40 && scrolled <= 60){
            progressBar.style.height  = 60 + "%";
        }
        else if(scrolled >= 60 && scrolled <= 80){
            progressBar.style.height  = 80 + "%";
        }
        else if(scrolled >= 80 && scrolled <= 100){
            progressBar.style.height  = 100 + "%";
        }
        else if(scrolled===0){
            progressBar.style.height  = "0%";
        }
    }
    return ( 
        <div className="body">
            <div className="scroller">
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
                <div className="circles">
                <div className="progress-container-circle">1</div>
                <div className="progress-container-circle">2</div>
                <div className="progress-container-circle">3</div>
                <div className="progress-container-circle">4</div>
                <div className="progress-container-circle">5</div>
                </div>
               
            </div>
            {props.isshow ===1 ? 
            <Card data={data1} />
            // <div className="blocks" >
            //     <div className="block">
            //         <h4>Заголовок 1</h4>
            //         <p>Задача организации, в особенности же начало повседневной работы по формированию </p>
            //     </div>
            //     <div className="block">
            //     <h4>Заголовок 2</h4>
            //         <p>Задача организации, в особенности же начало повседневной работы по формированию </p>
            //     </div>
            //     <div className="block">
            //     <h4>Заголовок 3</h4>
            //         <p>Задача организации, в особенности же начало повседневной работы по формированию </p>
            //     </div>
            //     <div className="block">
            //     <h4>Заголовок 4</h4>
            //         <p>Задача организации, в особенности же начало повседневной работы по формированию </p>
            //     </div>
            //     <div className="block">
            //     <h4>Заголовок 5</h4>
            //         <p>Задача организации, в особенности же начало повседневной работы по формированию </p>
            //     </div>
            // </div>
            :
            <Card data={data2} />
        //     <div className="blocks" >
        //     <div className="block">
        //         <h4>Заголовок 1</h4>
        //         <p>Another Content</p>
        //     </div>
        //     <div className="block">
        //     <h4>Заголовок 2</h4>
        //         <p>Another Content</p>
        //     </div>
        //     <div className="block">
        //     <h4>Заголовок 3</h4>
        //         <p>Another Content</p>
        //     </div>
        //     <div className="block">
        //     <h4>Заголовок 4</h4>
        //         <p>Another Content</p>
        //     </div>
        //     <div className="block">
        //     <h4>Заголовок 5</h4>
        //         <p>Another Content</p>
        //     </div>
        // </div>
}
        </div>
     );
}
 
export default Body;