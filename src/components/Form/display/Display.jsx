import React from "react";
import { Form, Field } from "formik";
// import { dateFormat, timeFormat } from "../FieldFormats/FieldFormats";
import { AntInput, AntTextArea } from "../controls/FormControls";
import { validateEmail, validateName, isRequired } from "../validate/validate";
import '../styles.css';
import { Spin } from "antd";

export default ({ handleSubmit, values, submitCount, isSubmitting }) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      type="text"
      name="name"
    //   label="Name"
      placeholder="Enter Name"
      defaultValue={values.name}
      validate={validateName}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="email"
      type="email"
    //   label="Email"
      placeholder="Enter Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntTextArea}
      maxLength={100}
    //   showCount={true}
      name="message"
      placeholder="message"
      type="text"
    //   value={values.message}
    //   label="Message"
    //   defaultValue={values.message}
      validate={isRequired}
    //   submitCount={submitCount}
      hasFeedback
    />
    
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting && <Spin />}Submit
      </button>
    </div>
  </Form>
);
