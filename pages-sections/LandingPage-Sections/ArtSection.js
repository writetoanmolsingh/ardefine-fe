import React from 'react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import CustomDialog from '../../components/CustomDialog/CustomDialog';
import FormTextInput from '../../components/FormTextInput/FormTextInput';
import { postEnquiries } from "../../utils/api";

const useStyles = makeStyles(styles);

export default function ArtSection({ artworks }) {
  const [open, setOpen] = React.useState(false);
  const [artwork, setArtwork] = React.useState("")
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );

  const handleClickOpen = (artwork) => {
    setOpen(true);
    setArtwork(artwork)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEnquiry = (values) => {
    let postData = {
      "artwork": artwork,
      "name": values.name,
      "email": values.email,
      "enquiry": values.enquiry
    }

    postEnquiries(postData)
    setOpen(false)
  }


  return (
    <>
      {open &&
        <CustomDialog open={open} onClose={handleClose} title="Enquiry">
          <div style={{ padding: "30px" }}>
            <Formik
              initialValues={{ name: '', email: '', enquiry: '' }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(50, 'Must be 50 characters or less')
                  .required('Required'),
                email: Yup.string()
                  .email('Invalid Email Address')
                  .required('Required'),
                enquiry: Yup.string()
                  .max(250, 'Must be 250 characters or less')
                  .required('Required'),
              })}
              onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                  sendEnquiry(values);
                  resetForm({ name: '', email: '', enquiry: '' });
                }, 400);
              }}
            >
              <Form>
                <div>
                  <h5 className={classes.emptyTitle}>Enquiry for {artwork}</h5>
                  <FormTextInput name="name" label="Name" />
                  <FormTextInput name="email" label="Email" />
                  <FormTextInput name="enquiry" label="Enquiry" multiline rows={6} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
                  <Button type="submit" color="primary">Send Enquiry</Button>
                </div>
              </Form>
            </Formik>
          </div>
        </CustomDialog>
      }
      <GridContainer spacing={2}>
        {artworks?.map((artwork, index) => {
          return (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src={artwork?.image?.url}
                    alt="..."
                    className={imageClasses}
                    onClick={() => window.open(artwork?.image?.url)}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {artwork.title}
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    {artwork.description}
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button simple color="primary" onClick={() => handleClickOpen(artwork?.title)}>Enquire</Button>
                </CardFooter>
              </Card>
            </GridItem>
          )
        })}
        {artworks?.length < 1 && <GridItem><h4 className={classes.emptyTitle}>No posts available.</h4></GridItem>}
      </GridContainer>
    </>
  )
}
