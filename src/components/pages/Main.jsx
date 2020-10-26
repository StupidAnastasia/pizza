import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPizzas } from '../../redux/actions/pizzas'
import { addPizzaToCart } from '../../redux/actions/cart'
import { setCategory, setSortBy } from '../../redux/actions/filters'

import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoader,
} from '../../components'

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]
const Main = () => {
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onClickSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])
  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onSelectCategory={onSelectCategory}
          categoryNames={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          sortItems={sortItems}
          onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  )
}

export default Main
