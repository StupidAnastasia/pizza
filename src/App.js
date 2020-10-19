import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'

import { Header } from './components'
import { Main, Cart } from './components/pages'
import { getPizzas } from './redux/actions/pizzas'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPizzas())
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact component={Main} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  )
}
