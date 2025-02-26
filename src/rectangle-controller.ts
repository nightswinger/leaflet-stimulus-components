import L from "leaflet"
import PolygonController from "./polygon-controller"

export default class extends PolygonController {
  declare boundsValue: L.LatLngBoundsExpression

  static values = {
    bounds: Array,
    ...PolygonController.values,
  }

  connect(): void {
    this.layer = L.rectangle(this.boundsValue, this.options)
    this.add(this.layer)
  }
}
