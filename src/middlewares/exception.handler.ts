import { NextFunction, Request, Response } from "express";

export const ExceptionsHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  // Si c'est le cas, c'est notre propre erreur
  if (err.status && err.error) {
    return res.status(err.status).json({ error: err.error });
  }

  // Sinon pour les autres cas on retourne une erreur 500
  return res.status(500).json({ error: "Erreur interne" });
};
