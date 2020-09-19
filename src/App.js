import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from './components'
import { Main, Cart } from './components/pages'

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' exact component={Main}></Route>
        <Route path='/cart' exact component={Cart}></Route>
      </div>
    </div>
  )
}