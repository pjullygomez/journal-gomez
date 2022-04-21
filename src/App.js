import React from "react";
import JournalList from "./components/JournalList";
import "./App.css";

function App() {
  return (
    <div className="journalContainer">
      <div>
        <h1>Thoughts for Today</h1>
        <JournalList />
      </div>

      <div>
        <h1>Tasks (To Do List)</h1>
        <JournalList />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
