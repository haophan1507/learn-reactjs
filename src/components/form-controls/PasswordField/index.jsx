import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = !!errors[name];
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(x => !x)
  }

  return (
    <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disabled}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PasswordField;
