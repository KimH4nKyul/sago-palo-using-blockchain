export class CreateUserCmd {
  constructor(
    private readonly _userId: string,
    private readonly _password: string,
    private readonly _userRole: string
  ) {}

  static from(body: Partial<CreateUserCmd>): CreateUserCmd {
    if (!body.userId) throw new Error('missing id')
    if (!body.password) throw new Error('missing password')
    if (!body.userRole) throw new Error('missing user role')
    if (body.password.length < 8)
      throw new Error('password length must be greater than or equal 8')
    return new CreateUserCmd(body.userId, body.password, body.userRole)
  }

  get userRole(): string {
    return this._userRole
  }

  get userId(): string {
    return this._userId
  }

  get password(): string {
    return this._password
  }
}
