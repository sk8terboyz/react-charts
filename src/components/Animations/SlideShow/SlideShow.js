import "./SlideShow.css";
import $ from 'jquery';
const SlideShow = () => {

    const slideImg = (next=true, choice=-1) => {
        if(choice !== -1) {
            // hiden current img and display specific img
            $(".currentImg")[0].classList.toggle("currentImg");
            $(`#image${choice}`)[0].classList.toggle("currentImg");
            return;
        }
        let current = $(".currentImg")[0].attributes[2].nodeValue;
        $(".currentImg")[0].classList.toggle("currentImg");
        if(next) {
            switch (current) {
                case "image0":
                    $("#image1")[0].classList.toggle("currentImg");
                    break;
                case "image1":
                    $("#image2")[0].classList.toggle("currentImg");
                    break;
                case "image2":
                    $("#image3")[0].classList.toggle("currentImg");
                    break;
                case "image3":
                    $("#image0")[0].classList.toggle("currentImg");
                    break;
                default:
                    console.log("Major Error");
                    break;
            }
            return;
        }
        switch (current) {
            case "image0":
                imageDisplay(3)
                break;
            case "image1":
                imageDisplay(0)
                break;
            case "image2":
                $("#image1")[0].classList.toggle("currentImg");
                break;
            case "image3":
                $("#image2")[0].classList.toggle("currentImg");
                break;
            default:
                console.log("Major Error");
                break;
        }

    }

    const imageDisplay = (num) => {
        $(`#image${num}`)[0].classList.toggle("currentImg");
    }

    return (
        <div className="container">
            <h3>Two different ways of navigating slides</h3>
            <div className="imgHolder">
                <img src="./images/dusk-forest.jpg" alt="Forest at Dusk" id="image0" className="slideImg currentImg"></img>
                <img src="./images/fall-forest.jpg" alt="Forest in the Fall" id="image1" className="slideImg"></img>
                <img src="./images/on-the-rocks.jpg" alt="Lake next to rocks" id="image2" className="slideImg"></img>
                <img src="./images/waterfall.jpg" alt="Waterfall scenery" id="image3" className="slideImg"></img>
                <button className="testBtnRight testBtns" onClick={(e) => { slideImg(false) }}>&#60;</button>
                <button className="testBtnLeft testBtns" onClick={(e) => { slideImg(true) }}>&#62;</button>
            </div>
            <div className="btnHolder">
                <button className="arrow slideShowMover" onClick={() => { slideImg(false) }}>&#60;</button>
                <button className="slideShowMover" onClick={() => { slideImg(true, 0) }}>1</button>
                <button className="slideShowMover" onClick={() => { slideImg(true, 1) }}>2</button>
                <button className="slideShowMover" onClick={() => { slideImg(true, 2) }}>3</button>
                <button className="slideShowMover" onClick={() => { slideImg(true, 3) }}>4</button>
                <button className="arrow slideShowMover" onClick={() => { slideImg(true) }}>&#62;</button>    
            </div>
            <img></img>
        </div>
    )
}

export default SlideShow;