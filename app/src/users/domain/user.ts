export class User {
  constructor(
    private readonly _id: string,
    private readonly _password: string,
    private readonly _seq: number = 0
  ) {}

  static from(_id: string, _password: string, _seq: number) {
    return new User(_id, _password, _seq)
  }

  static create(_id: string, _password: string): User {
    return new User(_id, _password)
  }

  get password(): string {
    return this._password
  }

  get id(): string {
    return this._id
  }

  get seq(): number {
    return this._seq
  }
}
