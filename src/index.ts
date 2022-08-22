import { config } from "./config";

// Get and store express package in variable
const express = require("express");

// Use express to our application
const app = express();

const port = 5000;

app.get("/", (req: any, res: any) => {
  res.json({ recettes: ["RecipeOne", "RecipeTwo", "RecipeThree"] });
});

app.listen(config.API_PORT, () => {
  console.log(`Server launched on port ${port}`);
});
