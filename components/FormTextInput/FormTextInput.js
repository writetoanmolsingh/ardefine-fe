import React from "react";
import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const FormTextInput = ({ name, placeholder, ...otherProps }) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        minWidth: "100%",
        minHeight: "55px",
        color: "#000000",
        "& .MuiInputBase-root": {
          fontSize: "14px",
          borderRadius: "8px",
          color: "#000000",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: `0px !important`,
          outline: "0 !important",
        },
      },
      emptyItem: {
        display: "none",
      },
    })
  );

  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...otherProps,
    variant: "standard",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <>
      <TextField
        {...field}
        {...configSelect}
        className={classes.root}
      />
    </>
  );
};

export default FormTextInput;