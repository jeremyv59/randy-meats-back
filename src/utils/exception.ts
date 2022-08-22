import { ApiException } from "~~/types/exception";

class Exception implements ApiException {
  constructor(readonly error: any, readonly status: number) {}
}

// Création d'une erreur 404
export class NotFoundException extends Exception {
  constructor(error: any) {
    super(error, 404);
  }
}

// Création d'une erreur 400
export class BadRequestException extends Exception {
  constructor(error: any) {
    super(error, 400);
  }
}
