import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);


export default function SectionCarousel({ carousels }) {

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {carousels?.map((carousel, index) => {
                  return (
                    <div key={index}>
                      <div className="slick-caption">
                        <Typography style={{ color: "#999" }}>
                          {carousel?.title}
                        </Typography>
                      </div>
                      <img
                        src={carousel?.cover?.url}
                        alt="First slide"
                        className="slick-image"
                      />
                      <div className="slick-caption">
                        <Typography style={{ color: "#999" }}>
                          "{carousel?.description}"
                        </Typography>
                      </div>
                    </div>
                  )
                })
                }
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
