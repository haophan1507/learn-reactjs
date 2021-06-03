import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/form-controls/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required("Please enter title"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log("Form", values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
