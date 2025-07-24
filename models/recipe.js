const mongoose = require("mongoose");

const recipeSchema = new mongoose.schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [String],
  instructions: {
    type: String,
    required: false,
  },
  prepTime: {
    type: Number,
    required: false,
  },
  difficulty: {
    type: String,
    default: "Easy",
    dif: ["Easy", "Medium", "Hard"],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
