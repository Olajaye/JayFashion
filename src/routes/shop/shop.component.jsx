import { Routes, Route } from "react-router-dom"
import CategoriesPrv from "../CategoriesPrev/CategoriesPrev"
import Category from "../Category/Category"

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPrv />} />
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  )


}

export default Shop