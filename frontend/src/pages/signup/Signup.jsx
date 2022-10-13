import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, register } from '../../app/authSlice';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import './signup.css'


export default function Signup() {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector((state) => {
    return state.auth
  })

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

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8).matches(passwordRegex, 'Must contain One Uppercase, One Lowercase, One Number').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Wrong password").required('Required')
  });

  useEffect(() => {
    if (isError) {
      notifyError(message)
    }

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message])

  const submitForm = async (values) => {
    const userData = { ...values }
    dispatch(register(userData))
  }

  return (
    <div className='signup-container'>
      <h1 className='form-h1'>Sign up</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          submitForm(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-singup'>

            <div className='form-input-container'>
              <Field
                name="name"
                placeholder="Name"
                className={`form-input ${errors.name && touched.name ? "input-error" : ""}`}
              />
              {errors.name && touched.name ? (
                <div className='input-error-message'>{errors.name}</div>
              ) : null}
            </div>

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

            <div className='form-input-container'>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className={`form-input ${errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}`}
              />
              {errors.confirmPassword && touched.confirmPassword ? <div className='input-error-message'>{errors.confirmPassword}</div> : null}
            </div>

            <button type="submit" className='form-submit-button'>Create Account</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}