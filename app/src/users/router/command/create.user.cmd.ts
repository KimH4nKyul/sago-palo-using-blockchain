export class CreateUserCmd {
  constructor(
    private readonly _id: string,
    private readonly _password: string
  ) {}

  static from(body: Partial<CreateUserCmd>): CreateUserCmd {
    if (!body.id || !body.password) throw new Error('error')
    return new CreateUserCmd(body.id, body.password)
  }

  get id(): string {
    return this._id
  }

  get password(): string {
    return this._password
  }
}
