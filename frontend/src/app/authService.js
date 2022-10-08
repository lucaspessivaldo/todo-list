import { api } from "../services/api";

//Register user
const register = async (userData) => {
  const response = await api.post('/register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


const authService = {
  register
}

export default authService