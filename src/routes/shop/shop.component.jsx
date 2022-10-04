import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCatergoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCatergoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
