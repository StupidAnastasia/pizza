import axios from 'axios'

export const pizzasAPI = {
  fetchPizzas() {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      return data
    })
  },
}
