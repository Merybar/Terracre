export class CommunityModule {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public text: string,
    public avatar: string,
    public created_at: string
  ) {}
}
export class PostModule {
  constructor(public text: string, public user_id: number) {}
}
