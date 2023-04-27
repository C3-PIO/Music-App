import { Carousel, Container } from "react-bootstrap";

// Starting page in the Main component
function Home() {
  return (
    <>
    <Container>
    <Carousel fade className="h-50 mb-5">
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
    <Container>
        <div className="p-5 mb-4 bg-dark rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Music App!</h1>

            </div>
        </div>
    </Container>
    </>
  );
}

export default Home;
