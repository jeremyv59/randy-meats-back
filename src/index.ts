import { Request, Response } from "express";
import { config } from "./config";
import { ExceptionsHandler } from "./middlewares/exception.handler";
import { UnknownRoutesHandler } from "./middlewares/unknownRoutes.handler";
import { getAllRecipes } from "./resources/recipe.controller";

// Get and store express package in variable
const express = require("express");

// Use express to our application
const app = express();

app.get("/", getAllRecipes);

// Retourne une erreur pour les routes non définies
app.all("*", UnknownRoutesHandler);

// Gestion des erreurs
app.use(ExceptionsHandler);

app.listen(config.API_PORT, () => {
  console.log(`Server launched on port ${config.API_PORT}`);
});
