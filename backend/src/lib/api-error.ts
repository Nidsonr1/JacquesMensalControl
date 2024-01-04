export class ApiErrors extends Error {
	public readonly statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}

export class alreadyRegistred extends ApiErrors {
  constructor(name: string) {
    super(`${name} já cadastrado(a)!`, 400);
  }
}

export class notFound extends ApiErrors {
	constructor(name: string) {
		super(`${name} não encontrado(a)!`, 404);
	}
}