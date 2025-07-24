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
