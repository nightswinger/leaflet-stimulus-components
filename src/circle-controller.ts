import L from "leaflet"
import CircleMarkerController from "./circle-marker-controller"

export default class extends CircleMarkerController {
  declare circle: L.Circle

  connect() {
    this.circle = L.circle(this.centerValue, this.options)
    this.add(this.circle)
  }
}
