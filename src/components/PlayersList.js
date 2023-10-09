import React from "react";
import Player from "./Player";
import joueurs from "../joueurs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlayersList = () => {
  return (
    <div>
      <Row>
        {joueurs.map((joueur) => (
          <Col key={joueur.nom} sm={6} md={4} lg={3}>
            <Player {...joueur} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlayersList;
