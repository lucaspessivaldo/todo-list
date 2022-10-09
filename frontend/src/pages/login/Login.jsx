import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { reset, login } from '../../app/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import './login.css'

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector((state) => {
    return state.auth
  })

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
    dispatch(login(userData))
  }


  return (
    <div className='login-container'>
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
