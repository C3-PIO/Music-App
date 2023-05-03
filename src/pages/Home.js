import { Carousel, Container } from "react-bootstrap";

// Starting page in the Main component
function Home() {
  return (
    <>
      <Container>
        <Container className="home-header">
          <h1 className="display-5 fw-bold">
            Appandorify Music
          </h1>
        </Container>
      </Container>
      <div className="carousel">
        <Carousel fade interval={4500}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/party.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/beach.jpg")}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/city.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/group.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Home;
