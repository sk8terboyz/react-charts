import { useState } from 'react';
import '../Animations.css'
import $ from 'jquery';
const PickAxe = () => {

    const [isActive, setIsActive] = useState(false);

    const startAnim = () => {
        if(isActive) {
            console.log('good');
        }
    }

    const stopAnim = () => {
        setIsActive(false);
    }

    const toggleAnim = () => {
        $("#pickaxe")[0].classList.toggle("pickAxe");
    }

    $(".animationContainer").on("mousedown", () => { setIsActive(true); startAnim() })
    $(".animationContainer").on("mouseup", () => { stopAnim() })

    return (
        <div className='container'>
            <div className='animationContainer'>
                <img src="./images/pickaxe.png" alt="pickaxe" className="pickAxe" id="pickaxe"/>
            </div>
            <button onClick={toggleAnim} id="pickToggle">Toggle Pickaxe</button>
        </div>
    );
};

export default PickAxe;