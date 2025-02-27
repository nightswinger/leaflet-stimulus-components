import L from "leaflet"
import Polygon from "./polygon"

export default class extends Polygon {
  declare boundsValue: L.LatLngBoundsExpression

  static values = {
    bounds: Array,
    ...Polygon.values,
  }

  connect(): void {
    this.layer = L.rectangle(this.boundsValue, this.options)
    this.add(this.layer)
  }
}
