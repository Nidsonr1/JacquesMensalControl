export class ApiErrors extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode;
  }
}

export class Unauthenticated extends ApiErrors {
  constructor() {
    super('Usuário não autenticado', 401)
  }
}

export class InvalidCredentials extends ApiErrors {
  constructor() {
    super('Credenciais Inválidas', 404);
  }
}

export class AlreadyExist extends ApiErrors {
  constructor(name: string) {
    super(`${name} já cadastrado(a)!`, 400)
  }
}

export class NotFound extends ApiErrors {
  constructor(name: string) {
    super(`${name} não encontrado`, 404)
  }
}