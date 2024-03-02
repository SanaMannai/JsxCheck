import React from "react";
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center", marginTop:"12px"}}>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
