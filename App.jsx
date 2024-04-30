import { useState } from "react";
import "./App.css";
import Tours from "./Components/Tours";
import data from "./data";
function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  function refreshHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left!</h2>
        <button className="btn-white" onClick={refreshHandler}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
