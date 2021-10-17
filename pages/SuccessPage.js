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

import background_image from "../public/img/black_wallpaper.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const SuccessPage = ({ testimonials, carousels, ...rest }) => {
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
              <h1 className={classes.title}>Thank for writing to us.</h1>
              <h4>
                We will get back to you shortly.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}


export default SuccessPage;