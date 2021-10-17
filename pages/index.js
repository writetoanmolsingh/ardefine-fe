import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import logoIcon from "../public/img/logo.png";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import HomeCarouselSection from "pages-sections/LandingPage-Sections/HomeCarouselSection.js";
import TestimonialSection from "pages-sections/LandingPage-Sections/TestimonialSection.js";
import ContactUs from "pages-sections/LandingPage-Sections/ContactUs.js";

import { getTestimonials, getCarousels, postMessages } from "../utils/api";

import background_image from "../public/img/black_wallpaper.jpg";

const useStyles = makeStyles(styles);

const LandingPage = ({ testimonials, carousels, ...rest }) => {
  const classes = useStyles();

  const sendMessage = (values) => {
    let postData = {
      "email": values.email,
      "message": values.message,
      "name": values.name
    }

    postMessages(postData);
  }

  return (
    <div>
      <Header
        color="transparent"
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
              <h2 className={classes.title}>Where Words Fail To Draw A Line Around Your Thoughts.</h2>
              <h4>
                Art is the experience of a creation either through expression of a skill or translation of an imagination. Ardefine is an attempt to explore, define and refine those experiences.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <HomeCarouselSection carousels={carousels} />
          <TestimonialSection testimonials={testimonials} />
          <ContactUs sendMessage={sendMessage} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const testimonials = await getTestimonials()
  const carousels = await getCarousels()
  return { props: { testimonials, carousels } }
}

export default LandingPage;