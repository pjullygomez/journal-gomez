import React from "react";
import JournalList from "./components/JournalList";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="journalContainer">
      <div>
        <Helmet>
          <title>Online Journal</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
      </div>
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
