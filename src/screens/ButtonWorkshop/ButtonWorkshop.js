import DropdownCardBase from "../../components/Card/DropdownCardBase";
import DropdownCardHTML from "../../components/Card/DropdownCardHTML";
import DropdownCardReact from "../../components/Card/DropdownCardReact";
import './ButtonWorkshop.css';

const ButtonWorkshop = () => {

    return (
        <div>
            <h4>React Dropdown Button</h4>
            <p>This dropdown button/card was created with React-Bootstrap</p>
            <DropdownCardReact />
            <h4>Dropdown Button</h4>
            <p>This is my recreation of the above without the use of bootstrap to allow for more customizability</p>
            <div className="center">
                <DropdownCardBase />
                <DropdownCardBase />
                <DropdownCardBase />
            </div>
            <h4>HTML Details</h4>
            <p>This is made with the &lt;details&gt; tag to create a dropdown card</p>
            <p>Currently a flicker when closing (attempting to fix)</p>
            <div className="testContainer">
                <DropdownCardHTML />
                <DropdownCardHTML />
                <DropdownCardHTML />
                <DropdownCardHTML />
            </div>
        </div>
    )
}

export default ButtonWorkshop;