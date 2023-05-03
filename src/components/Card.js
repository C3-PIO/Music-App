import React from 'react'
import { Container, Row } from 'react-bootstrap';

// https://react-bootstrap.netlify.app/docs/components/cards
function Card({ albums }) {
    console.log(albums)
  return (
    <Container className="px-2">
    <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
      {albums.map((album, index) => {
        return (
          <Card key={index} className="bg-dark p-0 my-1">
            <Card.Img src={album.images[0].url} />
            <Card.Body className="bg-dark">
              <Card.Title>{album.name}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  </Container>
  )
}

export default Card