import axios from 'axios'

export const setPizzas = (items) => ({ type: 'SET_PIZZAS', payload: items })

export const toggleLoading = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const getPizzas = (category, sortBy) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  })
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data))
    })
}
