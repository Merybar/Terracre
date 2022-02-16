export class InvitationModule {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public avatar: string,
    public role: string,
    public created_at: string
  ) {}
}
