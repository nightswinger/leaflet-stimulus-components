import L from "leaflet"
import Path from "./path"

export default class extends Path {
  declare centerValue: L.LatLngExpression
  declare radiusValue: number

  static values = {
    center: Array,
    radius: Number,
    ...Path.values,
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
