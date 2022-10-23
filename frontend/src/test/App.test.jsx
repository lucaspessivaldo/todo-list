import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../app/store'

import Homepage from '../pages/homepage/Homepage'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'

describe('Homepage', () => {
  test("Head text", () => {
    const { getByText } = render(<BrowserRouter><Homepage /></BrowserRouter>)
    expect(getByText('Organize your life and work, use Todo.')).toBeInTheDocument();
  })
  test("Feature - component", () => {
    const { getByText } = render(<BrowserRouter><Homepage /></BrowserRouter>)
    expect(getByText('Zero configuration')).toBeInTheDocument();
  })
})

describe('NavBar', () => {
  test("Login button", () => {
    const { getByText } = render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>)
    expect(getByText('Login')).toBeInTheDocument();
  })
  test("Sign Up button", () => {
    const { getByText } = render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>)
    expect(getByText('Sign Up')).toBeInTheDocument();
  })
})

describe('Footer', () => {
  test("Text footer", () => {
    const { getByText } = render(<BrowserRouter><Footer /></BrowserRouter>)
    expect(getByText('© 2021-2022 Todo. All Rights Reserved', { exact: false })).toBeInTheDocument();
  })
})
