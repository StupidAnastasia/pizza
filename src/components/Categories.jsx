import React, { useState, memo } from 'react'


const Categories = memo(({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = useState(null)

    const OnChangeActiveItem = index => {
        setActiveItem(index)
        onClickItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => OnChangeActiveItem(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li className={activeItem === index ? 'active' : ''}
                            onClick={() => OnChangeActiveItem(index)} key={`${name}_${index}`}>{name}</li>))
                }
            </ul>
        </div>
    )
})

export default Categories