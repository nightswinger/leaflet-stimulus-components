import L from "leaflet"
import PathController from "./path-controller"

export default class extends PathController {
  declare centerValue: L.LatLngExpression
  declare radiusValue: number

  static values = {
    center: Array,
    radius: Number,
    ...PathController.values,
  }

  connect() {
    this.layer = L.circleMarker(this.centerValue, this.options)
    this.add(this.layer)
  }

  get options() {
    return {
      ...super.options,
      radius: this.radiusValue,
    }
  }
}
