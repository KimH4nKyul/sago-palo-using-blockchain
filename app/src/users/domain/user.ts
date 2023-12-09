enum LoginStatus {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

enum UserRole {
  AMDIN = 'ADMIN',
  GENERAL = 'GENERAL',
  COMPANY = 'COMPANY',
}

export class User {
  private _isLogin: LoginStatus = LoginStatus.LOGOUT
  private _userRole: UserRole = UserRole.GENERAL

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

  login() {
    this._isLogin = LoginStatus.LOGIN
  }

  logout() {
    this._isLogin = LoginStatus.LOGOUT
  }

  set userRole(role: UserRole) {
    this._userRole = role
  }

  get userRole(): UserRole {
    return this._userRole
  }

  get isLogin(): LoginStatus {
    return this._isLogin
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
