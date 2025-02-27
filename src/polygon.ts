import L from "leaflet"
import Polyline from "./polyline"

export default class extends Polyline {
  static values = {
    ...Polyline.values,
  }

  connect(): void {
    this.layer = L.polygon(this.positionsValue, this.options)
    this.add(this.layer)
  }
}
