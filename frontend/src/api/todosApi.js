import { api } from "../services/api";
import authService from '../app/authService'

const getToken = () => JSON.parse(localStorage.getItem('user')).data.token

export const getTodos = async () => {
  const access_token = getToken()
  const response = await api.get('/dashboard', {
    headers: {
      'Authorization': `token ${access_token}`
    }
  }).catch(error => {
    if (error.response.status === 403) {
      authService.logout()
    }
  })

  return response.data
}

export const addTodo = async (text) => {
  const access_token = getToken()
  return await api.post('/dashboard', { text }, {
    headers: {
      'Authorization': `token ${access_token}`
    }
  })
}

export const deleteTodo = async (todoId) => {
  const access_token = getToken()
  return await api.delete('/dashboard', {
    headers: {
      'Authorization': `token ${access_token}`
    },
    data: {
      todoId
    }
  })
}

export const updateTodo = async ({ todoId, checked }) => {
  const access_token = getToken()
  return await api.patch('/dashboard', { todoId, checked: checked }, {
    headers: {
      'Authorization': `token ${access_token}`
    }
  })
}
