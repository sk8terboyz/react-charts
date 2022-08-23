import DropdownCardBase from "../../components/Card/DropdownCardBase";
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
            </div>
        </div>
    )
}

export default ButtonWorkshop;