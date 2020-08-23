import React from "react";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const { red, blue, green } = require("@material-ui/core/colors");

function UserTutorialCarousel({
  carouselState,
  toggleCarouselState,
  ...classes
}) {
  return (
    <div className={classes.carouselRoot}>
      <AutoRotatingCarousel
        label="Get started"
        // mobile
        open={carouselState}
        className={classes.carousel}
        onClose={toggleCarouselState}
        onStart={toggleCarouselState}
      >
        <Slide
          media={
            <img
              src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"
              alt={"youtube"}
            />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={
            <img
              src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png"
              alt={"google"}
            />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={
            <img
              src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png"
              alt={"google"}
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
      </AutoRotatingCarousel>
    </div>
  );
}

export default UserTutorialCarousel;
