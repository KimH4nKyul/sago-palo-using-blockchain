export class ProfileUserCmd {
  constructor(private readonly _dbId: string) {}

  static from(body: Partial<ProfileUserCmd>): ProfileUserCmd {
    if (!body.dbId) throw new Error('missing id')
    return new ProfileUserCmd(body.dbId)
  }

  get dbId(): string {
    return this._dbId
  }
}
