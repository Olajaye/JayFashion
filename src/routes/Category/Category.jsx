import "./category.scss"
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../components/context/Categories.context"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/product.card"

function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setPeroduct] = useState(categoriesMap[category])

  useEffect(() => {
    setPeroduct(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>


  )
}

export default Category