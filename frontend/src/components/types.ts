import { LatLngExpression } from "leaflet";

export interface MarkerType {
  geocode: LatLngExpression;
  popUp: string;
}
