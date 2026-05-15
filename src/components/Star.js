import {FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-brands-svg-icons";

function Star(props) {
    return(
        <FontAwesomeIcon icon={faStar} className={props.selected ? "satr selected" : "star"}
        onClick={props.onClick}
        />
    );
}

export default Star;