import { NotFoundException } from "~/utils/exception";

// Pour toutes les routes non définies, on retourne une erreur
export const UnknownRoutesHandler = () => {
  throw new NotFoundException(`La resource demandée n'existe pas`);
};
