const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const dotenv = require('dotenv').config()

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
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
  const updatedRecipe = await Recipe.findByIdAndUpdate("68820be823ce09834a27fcb6", { new: true });
  console.log(updatedRecipe);
}

updateRecipe();

async function deleteRecipe() {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete("68820be823ce09834a27fcb6");
    console.log("Recipe Successfully Deleted");
  } catch (error) {
    console.log("Error Deleting", error);
  }
}

deleteRecipe();

async function getRecipeByID() {
  try {
    const foundRecipe = await Recipe.findById("68820be823ce09834a27fcb6");
    console.log(foundRecipe);
  } catch (error) {
    console.log("No recipe with this ID exists.");
  }
}

getRecipeByID();
