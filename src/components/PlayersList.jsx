import React from "react";
import Player from "./Player";
import playersData from "./players";

const PlayersList = () => {
  return (
    
    <div style= {{ 
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      justifyContent: "center",
      gap: "3px",
      gridTemplateColumns : "repeat(4, 1fr)",
      // width: "18rem" 
      margin: "10px", 
      // border: "1px solid #ccc", 
      borderRadius: "8px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}>

      {playersData.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayersList;