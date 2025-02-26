import L from "leaflet"
import CircleMarkerController from "./circle-marker-controller"

export default class extends CircleMarkerController {
  connect() {
    this.layer = L.circle(this.centerValue, this.options)
    this.add(this.layer)
  }
}
