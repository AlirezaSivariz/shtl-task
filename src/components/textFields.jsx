import { IconButton, InputAdornment, TextField } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const TextFieldComponent = ({
  field,
  register,
  errors,
  showPassword,
  handleTogglePasswordVisibility,
}) => {
  if (!Object.keys(field).length) {
    return null; // if field object is empty, show nothing
  }
  return (
    <>
      <TextField
        autoComplete={field?.type === "password" ? "new-password" : "off"}
        placeholder={field?.placeholder}
        variant="outlined"
        key={field?.name}
        {...register(field?.name)}
        type={
          field.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : field.type
        }
        size="small"
        fullWidth
        error={errors[field.name] ? true : false}
        helperText={errors[field.name] && errors[field.name].message}
        InputProps={{
          ...(field.type === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            ),
          }),
        }}
      />
    </>
  );
};

export default TextFieldComponent;
