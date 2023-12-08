export class ProfileUserCmd {
  constructor(private readonly _id: string) {}

  static from(body: Partial<ProfileUserCmd>): ProfileUserCmd {
    if (!body.id) throw new Error('missing properties')
    return new ProfileUserCmd(body.id)
  }

  get id(): string {
    return this._id
  }
}
