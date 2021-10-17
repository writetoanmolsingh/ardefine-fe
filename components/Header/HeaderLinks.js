/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/profile">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Profile
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/ArtGallery">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Art Gallery
        </Button>
        </Link>
      </ListItem>
    </List>
  );
}
