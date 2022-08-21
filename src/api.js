import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  const json = await response.json();
  return json;
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  const json = await response.json();
  return json;
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  const json = await response.json();
  return json;
};
export { getMealById, getAllCategories, getFilteredCategory };
