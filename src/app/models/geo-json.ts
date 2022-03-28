namespace ApiModels {
  export interface GeoJson {
    type: string;
    geometry: { type: string; coordinates: any[] };
    properties: object;
  }
}
