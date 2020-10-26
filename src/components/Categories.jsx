import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'

const Categories = memo(
  ({ categoryNames, onSelectCategory, activeCategory }) => {
    const OnChangeCategory = (index) => {
      onSelectCategory(index)
    }
    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => OnChangeCategory(null)}
          >
            Все
          </li>
          {categoryNames &&
            categoryNames.map((name, index) => (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => OnChangeCategory(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    )
  }
)

Categories.propTypes = {
  activeCategory: PropTypes.number,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  OnChangeCategory: PropTypes.func,
}

Categories.defaultProps = { activeCategory: null, items: [] }
export default Categories
