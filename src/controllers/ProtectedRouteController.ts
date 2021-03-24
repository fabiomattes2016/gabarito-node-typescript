import { Request, Response } from 'express';

class ProtectedRouteController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({
      status: 200,
      message: 'Rota protegida por JWT',
    });
  }
}

export default ProtectedRouteController;
