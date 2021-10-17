import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import Quote from "components/Typography/Quote.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TestimonialSection({ testimonials }) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Testimonials</h2>
      <div>
        <GridContainer>
          {testimonials?.map((testimonial, index) => {
            return (
              <GridItem xs={12} sm={12} md={4} key={index}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={testimonial?.artwork?.url}
                      alt="..."
                      className={imageClasses}
                    />
                  </GridItem>
                  <CardBody>
                    <Quote
                      text={testimonial?.description}
                      author={testimonial?.buyer}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            )
          })
          }
        </GridContainer>
      </div>
    </div>
  );
}
