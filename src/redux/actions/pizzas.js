import { pizzasAPI } from '../../api/api'
import axios from 'axios'
export const setPizzas = (items) => ({ type: 'SET_PIZZAS', payload: items })

export const getPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data))
  })
}
