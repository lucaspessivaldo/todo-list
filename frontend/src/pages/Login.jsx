import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './signup.css'

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8).matches(passwordRegex, 'Must contain One Uppercase, One Lowercase, One Number').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Wrong password").required('Required')
});

export default function Login() {
  return (
    <div className='signup-container'>
      <h1 className='form-h1'>Login</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-singup'>


            <div className='form-input-container'>
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                className={`form-input ${errors.email && touched.email ? "input-error" : ""}`}
              />
              {errors.email && touched.email ? <div className='input-error-message'>{errors.email}</div> : null}
            </div>

            <div className='form-input-container'>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={`form-input ${errors.password && touched.password ? "input-error" : ""}`}
              />
              {errors.password && touched.password ? <div className='input-error-message'>{errors.password}</div> : null}
            </div>

            <button type="submit" className='form-submit-button'>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}