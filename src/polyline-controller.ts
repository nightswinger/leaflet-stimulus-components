import L from "leaflet"
import PathController from "./path-controller"

export default class extends PathController {
  declare polyLine: L.Polyline

  declare positionsValue: L.LatLngExpression[]
  declare smoothFactorValue: number
  declare noClipValue: boolean

  static values = {
    positions: Array,
    smoothFactor: { type: Number, default: 1 },
    noClip: { type: Boolean, default: false },
    ...PathController.values,
  }

  connect(): void {
    this.polyLine = L.polyline(this.positionsValue, this.options)
    this.add(this.polyLine)
  }

  get options(): L.PolylineOptions {
    return {
      ...super.options,
      smoothFactor: this.smoothFactorValue,
      noClip: this.noClipValue,
    }
  }
}
