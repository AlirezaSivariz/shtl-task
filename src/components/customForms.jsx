import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextFieldComponent from "./textFields";

const CustomForm = ({
  fields,
  dir = "rtl",
  fieldsEdit,
  onSubmit,
  validationSchema,
  sizeBtn,
  textBtn = "ورود",
  data,
  disabledButton,
  permission,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    textAlign: "left",
    fontSize: theme.fontSizeLg,
    color: theme.palette.grey[400],
  }));

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFormSubmit = (data, rowId) => {
    onSubmit(data, rowId);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const renderField = (field) => {
    return (
      <TextFieldComponent
        field={field}
        register={register}
        errors={errors}
        // theme={theme}
        showPassword={showPassword}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        defaultValue={data ? data[field.name] : undefined} // Use defaultValue prop to set initial value
      />
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
        <Grid container spacing={2}>
          {fields?.map((field, index) => (
            <Grid item sm={field.col || 12} key={index}>
              <StyledInputLabel shrink sx={{ mt: 2, fontSize: 18 }}>
                {field.label}
              </StyledInputLabel>
              <Grid item sm={12} key={index}>
                {renderField(field)}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              {...register("agreeToTerms")}
              checked={isChecked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label={
            <Typography variant="body2" style={{ marginLeft: "8px" }}>
              I agree to the Terms and Conditions
            </Typography>
          }
        />
        <Button
          sx={{ mt: 3 }}
          disabled={!isChecked}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit Form
        </Button>
      </form>
    </>
  );
};

export default CustomForm;
