import { api } from "../services/api";

const getToken = () => JSON.parse(localStorage.getItem('user')).data.token

export const getTodos = async () => {
  const access_token = getToken()
  const response = await api.get('/dashboard', {
    headers: {
      'Authorization': `token ${access_token}`
    }
  })
  return response.data
}

export const addTodo = async (text) => {
  return await api.post('/dashboard', { text })
}

export const updateTodo = async ({ todoId, checked }) => {
  return await api.patch('/dashboard', { todoId, checked })
}

export const deleteTodo = async (todoId) => {
  return await api.delete('/dashboard', { todoId })
}