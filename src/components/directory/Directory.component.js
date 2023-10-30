import React from 'react'
import "./directory.style.scss"
import DirectoryItem from '../Category-item/directory-item.component'
function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />
      })}
    </div>
  )
}

export default Directory