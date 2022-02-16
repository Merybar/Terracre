export class CommunityModule {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public text: Text,
    public avatar: string,
    public created_at: string
  ) {}
}
