export class PlantGardenModule {
  constructor(public plant_id: number, public garden_id: number) { }
}
export class GardenModule {
  constructor(
    public id: number,
    public name: string,
    public area_m: number,
    public country: string,
    public city: string,
    public street: string
  ) { }
}
export class AddGardenModule {
  constructor(
    public name: string,
    public length_cm: number,
    public width_cm: number,
    public country: string,
    public city: string,
    public street: string
  ) { }
}
export class TableGardenModule {
  constructor(
    public id: number,
    public image: string,
    public name: number,
    public suns_hday: number,
    public foliage_day: number,
    public fertilizer_day: number,
    public water_day: number,
    public created_at: number,

  ) { }
}
