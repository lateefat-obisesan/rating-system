import { useState } from "react";
import Star  from "./Star";

function StarRating() {
    const [rating, setRating] = useState(0);

    const words = [
        "Very Bad",
        "Bad",
        "Okay",
        "Good",
        "Very Good"
    ];
  
    return(
        <div className="rating-part">
            <h1>RATE US PLEASE</h1>
            {[1,2,3,4,5].map((num) => (
                <Star key={num} selected={num <= rating} onClick={() => setRating(num)}/>
            ))}
            <h2>{rating === 0 ? "Select Rating" : words[rating - 1]} </h2>
        </div>
    );
}

export default StarRating;


