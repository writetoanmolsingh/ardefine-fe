import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import logoIcon from "../public/img/logo.png";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import GallerySection from "../pages-sections/LandingPage-Sections/GallerySection";

import { getCategories } from "../utils/api";

import background_image from "../public/img/black_wallpaper.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const ArtGallery = ({ categories, ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={logoIcon}
        rightLinks={<HeaderLinks />}
        absolute
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image={background_image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>Art Gallery</h2>
              <h4>
                The journey so far has touched Acrylic - Abstracts, Figuratives, Cubism; Mixed Media - Mandalas, Zentangle, Line Art, Doodling and Sketching ..... and the exploration continues!
            </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GallerySection categories={categories} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const categories = await getCategories()
  return { props: { categories } }
}

export default ArtGallery;
