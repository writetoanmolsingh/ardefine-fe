import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HomeCarouselSection({ carousels }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Ardefine</h2>
          <h5 className={classes.description}>
            Indentifying and attaching oneself to a particular style of art can often end up with a feeling of being cocooned.
            At Ardefine, we are in a constant journey of experiencing, experimenting and executing various art-forms to give expression to our feelings.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <SectionCarousel carousels={carousels} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
