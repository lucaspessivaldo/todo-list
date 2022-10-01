import React from 'react';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { api } from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import './login.css'

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const notifyError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  })
};

const submitForm = async (values) => {
  api.post('/login', {
    name: values.name,
    email: values.email,
    password: values.password
  }).then(res => {
    console.log(res.data)
  }).catch(err => {
    notifyError(err.response.data.message)
  })
}

export default function Login() {
  return (
    <div className='login-container'>
      <ToastContainer />
      <h1 className='form-h1'>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          submitForm(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-login'>


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
