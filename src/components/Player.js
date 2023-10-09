import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ nom, equipe, nationalite, numeroMaillot, age, image }) => {
  return (
    <Card className="card-hover" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          Équipe: {equipe}
          <br />
          Nationalité: {nationalite}
          <br />
          Numéro de maillot: {numeroMaillot}
          <br />
          Âge: {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
