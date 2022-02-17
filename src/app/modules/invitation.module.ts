export class InvitationModule {
  constructor(
    public invitationId: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public avatar: string,
    public role: string
  ) {}
}
