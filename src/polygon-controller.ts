import L from "leaflet"
import PolylineController from "./polyline-controller"

export default class extends PolylineController {
  static values = {
    ...PolylineController.values,
  }

  connect(): void {
    this.layer = L.polygon(this.positionsValue, this.options)
    this.add(this.layer)
  }
}
