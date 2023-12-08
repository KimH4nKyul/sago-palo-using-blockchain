export class User {
  constructor(
    private readonly _id: string,
    private readonly _password: string,
    private readonly _dbId: string = ''
  ) {}

  static from(_id: string, _password: string, _dbId: string) {
    return new User(_id, _password, _dbId)
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

  get dbId(): string {
    return this._dbId
  }
}
