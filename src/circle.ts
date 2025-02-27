import L from "leaflet"
import CircleMarker from "./circle-marker"

export default class extends CircleMarker {
  connect() {
    this.layer = L.circle(this.centerValue, this.options)
    this.add(this.layer)
  }
}
