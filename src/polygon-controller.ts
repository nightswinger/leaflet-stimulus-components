import L from "leaflet"
import PolylineController from "./polyline-controller"

export default class extends PolylineController {
  declare polygon: L.Polygon

  static values = {
    ...PolylineController.values,
  }

  connect(): void {
    this.polygon = L.polygon(this.positionsValue, this.options)
    this.add(this.polygon)
  }
}
