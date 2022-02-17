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
