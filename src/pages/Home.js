import { Carousel, Container } from "react-bootstrap";

// Starting page in the Main component
function Home() {
  return (
    <>
      <Container className="">
        <Container className="p-3 my-3 bg-dark rounded-5">
          <h1 className="display-5 fw-bold bg-dark rounded-5 p-5">
            Appandorify Music
          </h1>
        </Container>
      </Container>
      <Container className="carousel p-0" data-ride="carousel">
        <Carousel fade className="mb-3">
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
      </Container>
    </>
  );
}

export default Home;
