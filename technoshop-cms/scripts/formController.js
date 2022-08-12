import { category } from "./elems.js";
import { getCategory } from "./serviceApi.js";


const updateCategory = async() => {
  category.textContent = '';
  const categoryList = await getCategory();
  const categoryOption = categoryList.map(cat => {
    const option = document.createElement('option');
    option.value = cat;
    return option
  
  });
// добавляем каиегории в верстку
  category.append(...categoryOption);

}

export const formController = () => {
  updateCategory();
}