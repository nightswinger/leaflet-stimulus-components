import L from "leaflet"
import Path from "./path"

export default class extends Path {
  declare positionsValue: L.LatLngExpression[]
  declare smoothFactorValue: number
  declare noClipValue: boolean

  static values = {
    positions: Array,
    smoothFactor: { type: Number, default: 1 },
    noClip: { type: Boolean, default: false },
    ...Path.values,
  }

  connect(): void {
    this.layer = L.polyline(this.positionsValue, this.options)
    this.add(this.layer)
  }

  get options(): L.PolylineOptions {
    return {
      ...super.options,
      smoothFactor: this.smoothFactorValue,
      noClip: this.noClipValue,
    }
  }
}
