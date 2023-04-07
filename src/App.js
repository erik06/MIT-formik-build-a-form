import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    validationSchema: Yup.object({
      emailField: Yup.string()
        .email("Invalid email address")
        .required("Field required"),
      pswField: Yup.string().required("Field required"),
    }),
    onSubmit: (values) => {
      console.log("form", values);
      alert("Login Successful");
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailField ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.emailField}
          </div>
        ) : null}
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.pswField ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.pswField}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
