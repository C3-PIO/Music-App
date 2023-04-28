import { Carousel, Container } from "react-bootstrap";

// Starting page in the Main component
function Home() {
  return (
    <>
      <Container className="carousel p-0">
        <Carousel fade className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/beach.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/woods.jpg")}
              alt="Second slide"
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
              src={require("../images/music.jpg")}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="">
        <Container className="p-3 m-0 bg-dark rounded-5">
          <h1 className="display-5 fw-bold bg-dark rounded-5 p-5">Welcome to Music App!</h1>
        </Container>
      </Container>
    </>
  );
}

export default Home;
