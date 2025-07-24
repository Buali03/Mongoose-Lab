const mongoose = require("mongoose");
const Recipe = require("/./models/Recipe");

async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Connection failed");
  }
}

connectToDB();

async function createRecipe() {
  const newRecipe = {
    name: "Um Ali",
    ingredients: ["Puff Pastry", "Milk"],
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium",
  };
  const createdRecipe = await Recipe.create(newRecipe);
  console.log(createdRecipe);
}
createRecipe();

async function getAllRecipes() {
  const foundRecipe = await Recipe.find();
  console.log(foundRecipe);
}

getAllRecipes();

async function updateRecipe() {
  const updatedRecipe = await Recipe.findByIdAndUpdate(recipeID, { new: true });
  console.log(updatedRecipe);
}

updateRecipe();

async function deleteRecipe() {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeID);
    console.log("Recipe Successfully Deleted");
  } catch (error) {
    console.log("Error Deleting", error);
  }
}

deleteRecipe();

async function getRecipeByID() {
  try {
    const foundRecipe = await Recipe.findById(recipeID);
    console.log(foundRecipe);
  } catch (error) {
    console.log("No recipe with this ID exists.");
  }
}

getRecipeByID();
