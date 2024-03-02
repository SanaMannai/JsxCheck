import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const image = {
    width:"307px",
    height:"307px",
  }
  return (
    <div>
    <Card style={{marginTop:"15px"}}>
      <Card.Img variant="top" src={imageUrl} style={image}/>
      <Card.Body style={{ flex: 1, width: "100%" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          <span style={{ fontSize: "14px", color: "#333" }}>Team: {team}</span>
          <br />
          <span style={{ fontSize: "14px", color: "#333" }}>Nationality: {nationality}</span>
          <br />
          <span style={{ fontSize: "14px", color: "#333" }}>Jersey Number: {jerseyNumber}</span>
          <br />
          <span style={{ fontSize: "14px", color: "#333" }}>Age: {age}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Player;