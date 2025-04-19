export async function getSearchedRecipe(query) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = res.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
}
