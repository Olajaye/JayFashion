import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../../shop-data.js"
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils.js";
// import { addCollectionAndDocument } from "../../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: []
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocument()
      setCategoriesMap(categoriesMap)
    }
    getCategoriesMap()
  }, [])
  const value = { categoriesMap }
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}