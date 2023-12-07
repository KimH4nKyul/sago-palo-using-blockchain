export class CreateUserCmd {
  constructor(
    private readonly _id: string,
    private readonly _password: string
  ) {}

  static from(_body: Partial<CreateUserCmd>): CreateUserCmd {
    if (!_body.id || !_body.password) throw new Error('error')
    return new CreateUserCmd(_body.id, _body.password)
  }

  get id(): string {
    return this._id
  }

  get password(): string {
    return this._password
  }
}
