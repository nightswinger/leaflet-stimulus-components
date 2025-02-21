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
    this.circleMarker = L.circleMarker(this.centerValue, {
      color: this.colorValue,
      fillColor: this.fillColorValue,
      fillOpacity: this.fillOpacityValue,
      radius: this.radiusValue,
    })
    this.add(this.circleMarker)
  }
}
