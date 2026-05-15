import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Star({selected, onClick}) {
    return(
        <FontAwesomeIcon icon={faStar} className={selected ? "pink" : "grey"}
        onClick={onClick}
        />
    );
}

export default Star;