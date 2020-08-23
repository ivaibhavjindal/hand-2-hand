import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";

function CarouselItem(props) {
  return (
    <Paper
      className="Project"
      style={{
        background: `url(${props.item.image})`,
        backgroundPosition: "center",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        minHeight: "30rem",
      }}
      elevation={10}
    ></Paper>
  );
}

const items = [{ image: Image1 }, { image: Image2 }];

function LandingCarousel() {
  return (
    <div style={{ marginTop: "2.5rem", cursor: "pointer" }}>
      <Carousel
        autoPlay={true}
        timer={500}
        interval={3000}
        animation={"fade"}
        indicators={true}
        timeout={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
      >
        {items.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </Carousel>
    </div>
  );
}

export default LandingCarousel;
