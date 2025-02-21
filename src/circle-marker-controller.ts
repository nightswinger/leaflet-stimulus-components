import L from "leaflet"
import PathController from "./path-controller"

export default class extends PathController {
  declare circleMarker: L.CircleMarker

  declare centerValue: L.LatLngExpression
  declare radiusValue: number

  static values = {
    center: Array,
    radius: Number,
    ...PathController.values,
  }

  connect() {
    this.circleMarker = L.circleMarker(this.centerValue, this.options)
    this.add(this.circleMarker)
  }

  get options() {
    return {
      ...super.options,
      radius: this.radiusValue,
    }
  }
}
