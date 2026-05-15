import {FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-brands-svg-icons";

function Star(selected, onClick) {
    return(
        <FontAwesomeIcon icon={faStar} className={selected ? "grey" : "pink"}
        onClick={onClick}
        />
    );
}

export default Star;