import { Request, Response } from "express";
import {
  searchRecipes,
  MarmitonQueryBuilder,
  RECIPE_PRICE,
  RECIPE_DIFFICULTY,
  Recipe,
} from "marmiton-api";

const qb = new MarmitonQueryBuilder();

export async function getAllRecipes(req: Request, res: Response) {
  const query = qb
    .withTitleContaining("soja")
    .withoutOven()
    .withPrice(RECIPE_PRICE.CHEAP)
    .takingLessThan(45)
    .withDifficulty(RECIPE_DIFFICULTY.EASY)
    .build();

  // Fetch the recipes
  const recipes: Recipe[] = await searchRecipes(query);
  res.json({ recipes });
}