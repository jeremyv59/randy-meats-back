import { config } from "./config";
import { ExceptionsHandler } from "./middlewares/exception.handler";
import { UnknownRoutesHandler } from "./middlewares/unknownRoutes.handler";

// Get and store express package in variable
const express = require("express");

// Use express to our application
const app = express();

const port = 5000;

app.get("/", (req: any, res: any) => {
  res.json({ recettes: ["RecipeOne", "RecipeTwo", "RecipeThree"] });
});

// Retourne une erreur pour les routes non définies
app.all("*", UnknownRoutesHandler);

// Gestion des erreurs
app.use(ExceptionsHandler);

app.listen(config.API_PORT, () => {
  console.log(`Server launched on port ${port}`);
});
