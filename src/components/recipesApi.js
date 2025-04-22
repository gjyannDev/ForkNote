import {
  addDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { col_ref, date_created, db } from "./firebaseClient";
import { handleError } from "./utils";

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
    const res = await addDoc(col_ref, {
      dateCreated: date_created,
      ...newRecipeData,
    });

    return res;
  } catch (error) {
    handleError(error, "addCustomRecipe");
  }
}

export async function getAllCustomRecipes() {
  try {
    const docSnap = await getDocs(col_ref);
    const allRecipes = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return allRecipes;
  } catch (error) {
    handleError(error, "getAllCustomRecipes");
  }
}

export async function getRealTimeRecipesData() {
  try {
    onSnapshot(col_ref, (snapShot) => {
      snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      //TODO: Put the render function in here
    });
  } catch (error) {
    handleError(error, "getRealTimeRecipesData");
  }
}

export async function updateCustomRecipe(recipeId, newData) {
  try {
    const ref_doc = doc(db, "custom_recipes", recipeId);
    const res = await updateDoc(ref_doc, newData);

    return res;
  } catch (error) {
    handleError(error, "updateCustomRecipe");
  }
}

export async function getRecipeById(recipeId) {
  try {
    const recipe = doc(col_ref, recipeId);
    const res = await getDoc(recipe);

    return res.data();
  } catch (error) {
    handleError(error, "updateCustomRecipe");
  }
}

export async function deleteCustomRecipe(recipeId) {
  try {
    console.log(recipeId);
    const doc_ref = doc(col_ref, recipeId);
    const res = await deleteDoc(doc_ref);

    return res;
  } catch (error) {
    handleError(error, "deleteCustomRecipe");
  }
}

export async function getSearchedMealById(recipeMealId) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeMealId}`
    );
    const data = res.json();

    return data;
  } catch (error) {
    handleError(error, "getSearchedMealById");
  }
}
