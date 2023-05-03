// Displays all tracks if an album or Playlist is selected

import { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap"


// artist album tracks path: https://api.spotify.com/v1/albums/{id}/tracks
// tracks path: https://api.spotify.com/v1/tracks

function Tracklist({token , artistID}) {
console.log(artistID)
  const [tracklist, setTracklist] = useState([])

  useEffect(() => {
  async function searchTracks() {
    let response = await fetch(
      'https://api.spotify.com/v1/albums/' + artistID + '/tracks',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTracklist(data.tracks.items);
    }
    searchTracks();
  }, []);

  return (
    <>
    <div>Tracklist</div>
    <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {tracklist.map((track, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={track.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title>{track.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
      </>
  );
}

export default Tracklist;
