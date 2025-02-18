import L from "leaflet"
import LayerController from "./layer_controller"

export default class extends LayerController {
  declare circle: L.Circle

  declare centerValue: L.LatLngExpression
  declare colorValue: string
  declare fillColorValue: string
  declare fillOpacityValue: number
  declare radiusValue: number

  static values = {
    center: Array,
    color: String,
    fillColor: String,
    fillOpacity: Number,
    radius: Number,
    ...LayerController.values,
  }

  connect() {
    this.circle = L.circle(this.centerValue, {
      color: this.colorValue,
      fillColor: this.fillColorValue,
      fillOpacity: this.fillOpacityValue,
      radius: this.radiusValue,
    })
    this.add(this.circle)
  }
}
