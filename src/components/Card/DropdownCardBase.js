import { useState } from "react";
import './DropdownCardBase.css';

const DropdownCardBase = () => {

    const [open, setOpen] = useState(false);
    
    const toggle = (e) => {
        let target = e.target.parentElement.parentElement.children[2].children[0];
        setOpen(!open);
        target.classList.toggle("expanded")
        target.classList.toggle("collapsed")
    }

    return (
        <div className="cardContainer">
            <div className="cardHeader">
                <h5 className="cardTitle">Website Name</h5>
                <button className="extender" onClick={(e) => {toggle(e)}}>({open ? "+" : "-"})</button>
            </div>
            <hr />
            <div className="cardBody">
                <div id="expand-contract" className="expanded">
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