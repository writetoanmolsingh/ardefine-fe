import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import ArtSection from "./ArtSection";

const useStyles = makeStyles(styles);

export default function GallerySection({ categories }) {

  const classes = useStyles();

  const tabs = categories?.map((category) => {
    return ({
      tabName: category.name,
      tabContent: <ArtSection artworks={category.artworks} />
    })
  })

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <CustomTabs
            plainTabs
            headerColor="danger"
            tabs={tabs}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
