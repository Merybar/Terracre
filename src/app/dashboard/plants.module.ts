export class PlantsModule {
  constructor(
    public id: number,
    public image: string,
    public name: string,
    public suns_hday: number,
    public foliage_day: number,
    public fertilizer_day: number,
    public water_day: number,
    public level: string,
    public description: string,
    public frost: string
  ) {}
}
