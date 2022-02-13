export class PlantModule {
  constructor(
    public id: number,
    public image: string,
    public name: string,
    public harvest: Text,
    public tip: Text,
    public keep: Text,
    public attention: Text,
    public suns_hday: number,
    public foliage_day: number,
    public fertilizer_day: number,
    public water_day: number,
    public deepDistance_cm: number,
    public rowDistance_cm: number,
    public collumDistance_cm: number,
    public level: string,
    public description: Text,
    public watering: Text,
    public frost: Text
  ) {}
}
