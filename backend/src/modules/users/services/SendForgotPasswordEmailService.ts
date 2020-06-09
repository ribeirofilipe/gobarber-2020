import { inject, injectable } from 'tsyringe';
// import User from '@modules/users/infra/typeorm/entities/User';
// import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUserRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<void> {}
}

export default SendForgotPasswordEmailService;
