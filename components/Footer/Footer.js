/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button href={"https://www.instagram.com/ardefine/"} justIcon link className={classes.margin5}>
                  <i className={"fab fa-instagram"} />
                </Button>
                <Typography style={{ color: "#999" }}>
                  ardefine
                </Typography>
              </div>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          Made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          Anmol Singh Chhabra
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
