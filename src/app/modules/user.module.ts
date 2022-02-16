export class UserModule {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public avatar: string,
    public phone_nummer: string,
    public created_at: string,
    public role: string
  ) {}
}
export class AddUserModule {
  constructor(
    public invitationId: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public created_at: string,
    public role: string
  ) {}
}
