import StarRating from "./StarRating";

function Dialog(props) {
    return(
        <div className="dialog-overlay">
            <div className="dialog-box">
                <button className="close-btn" onClick={props.closeDialog}>
                    X
                </button>
                <h2>Come back next time.</h2>
            </div>
        </div>
    );
}

export default Dialog;