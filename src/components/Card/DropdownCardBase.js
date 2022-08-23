import { useState } from "react";
import './DropdownCardBase.css';
import $ from 'jquery';

const DropdownCardBase = (cardBody) => {

    const [open, setOpen] = useState(false);
    
    const toggle = (e) => {
        let target = e.target.parentElement.parentElement.children[2].children[0];
        setOpen(!open);
        target.classList.toggle("expanded")
        target.classList.toggle("collapsed")
    }

    return (
        <div className="card">
            <div className="cardHeader">
                <h5 className="cardTitle">Website Name</h5>
                <button className="btn btn-outline-info btn-sm extender" onClick={(e) => {toggle(e)}}>{open ? "-" : "+"}</button>
            </div>
            <hr />
            <div className="cardBody">
                <p id="expand-contract" className="expanded">This is placeholder text to test the different things that I want to test and will leave this as an ambigous statement.</p>
            </div>
        </div>
    )
}

export default DropdownCardBase;