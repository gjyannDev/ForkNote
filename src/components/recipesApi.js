import { addDoc, onSnapshot } from "firebase/firestore";
import { colRef } from "./firebaseClient";

export async function getSearchedRecipe(query) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = res.json();
    
    return data;
  } catch (error) {
    handleError(error, "getSearchedRecipe");
  }
}

export async function addCustomRecipe(newRecipeData) {
  try {
    const res = await addDoc(colRef, newRecipeData)

    return res;
  } catch (error) {
    handleError(error, "addCustomRecipe");
  }
}