
import { useContext } from "react"
import { CategoriesContext } from "../../components/context/Categories.context"

import CategoryPreview from "../../components/Category-preview/CategoryPreview"


const CategoriesPrv = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </ >
  )
}

export default CategoriesPrv