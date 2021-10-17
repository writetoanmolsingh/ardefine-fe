import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as Yup from 'yup';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormTextInput from "../../components/FormTextInput/FormTextInput";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ContactUs({ sendMessage }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          message: Yup.string()
            .max(250, 'Must be 250 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            sendMessage(values)
            resetForm({ name: '', email: '', message: '' })
          }, 400);
        }}
      >
        <Form>
          <h2 className={classes.title}>Contact Us</h2>
          <GridContainer justify="center" spacing={2}>
            <GridItem xs={12} sm={12} md={8}>
              <FormTextInput
                label="Name"
                name="name"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <FormTextInput
                label="Email"
                name="email"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <FormTextInput
                label="Message"
                name="message"
                multiline
                rows={6}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" color="primary">Send Message</Button>
              </div>
            </GridItem>
          </GridContainer>
        </Form>
      </Formik >
    </div >
  );
}
