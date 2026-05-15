import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating.js";


function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="App">
      <StarRating />
      <button onClick={() => setShowDialog(true)}>
        Open Dialog
      </button>
      {showDialog && (
        <Dialog closeDialog={() => setShowDialog(false)} />
      )}
    </div>
  );
}

export default App;
