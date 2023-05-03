import { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap"; // Pre-created & styled components stored in 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
// import Card from "../components/Card";

function Albums({ token, randomPerson }) {

  // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");

  // Holds albums data
  const [albums, setAlbums] = useState([]);

  const [artistID, setArtistID] = useState("")
  console.log(artistID)
  // Grabs random item from the artists array 
  const random = randomPerson[Math.floor(Math.random() * 20)];

  // Fetches random artists albums when the page is first rendered. https://developer.spotify.com/documentation/web-api/howtos/web-app-profile for the 2nd paramter and https://developer.spotify.com/documentation/web-api/reference/search for query types
  useEffect(() => {
    async function getRandom() {
      let response = await fetch(
        `https://api.spotify.com/v1/search?q=${random}&type=album&limit=50`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      // console.log(data);
      setAlbums(data.albums.items);
    }
    getRandom();
  }, []);

  // Fetch albums based on users search input 
  async function searchAlbums() {
    let response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=album&limit=50`,
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
    setAlbums(data.albums.items)
    setArtistID(data.albums.items[0].id);
  }

  // console.log(albums)

  // Render data so results of each fetch displays on Albums Page
  return (
    <>
      <Container className="px-4">
        <InputGroup className="my-3 size-md">
          <FormControl 
            placeholder="Search Albums..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchAlbums();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={() => {
              searchAlbums();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      {/* <Card albums={albums}/> */}
      {/* https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {albums.map((album, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={album.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title>
                  <Link to="/tracklist" artistID={artistID}>{album.name}</Link>
                    </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Albums;
