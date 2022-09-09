import { useState } from "react";
import './DropdownCardBase.css';

const DropdownCardBase = () => {

    // Using React
    const [open, setOpen] = useState(false);    
    const toggle = (e) => {
        let target = e.target.parentElement.parentElement.children[2].children[0];
        setOpen(!open);
        target.classList.toggle("expanded")
        target.classList.toggle("collapsed")
    }
    
    // With React only handling click event
    const toggleBase = (e) => {
        let target = e.target;
        if(target.textContent === "(+)") {
            target.textContent = "(-)"
        } else {
            target.textContent = "(+)"
        }
        let content = e.target.parentElement.parentElement.children[2].children[0];
        content.classList.toggle("expanded")
        content.classList.toggle("collapsed")    
    }

    return (
        <div className="cardContainer">
            <div className="cardHeader">
                <h5 className="cardTitle"><a href="https://www.youtube.com" target="_blank" rel="noreferrer">communication.illinoisstate.edu</a></h5>
                {/* <button className="extender" onClick={(e) => {toggle(e)}}>({open ? "-" : "+"})</button> */}
                {/* still using ReactJS to handle click event */}
                <button className="extender" onClick={(e) => {toggleBase(e)}}>(+)</button>
                {/* pure HTML -- Doesn't work currently because too many buttons with same properties*/}
                {/* <button className="extender">(+)</button> */}
            </div>
            <hr />
            <div className="cardBody">
                <div id="expand-contract" className="collapsed">
                    <ul id="list">
                        <li>State: Test</li>
                        <li>Capital: Test</li>
                        <li>Area: Test</li>
                        <li>Status: Test</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropdownCardBase;