import React from 'react'
import "./directory.style.scss"
import CategoryItem from '../Category-item/Category-item.component'
function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />
      })}
    </div>
  )
}

export default Directory