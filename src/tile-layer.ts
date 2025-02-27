import L from "leaflet"
import Layer from "./layer"

export default class extends Layer {
  declare urlValue: string

  declare minZoomValue: number
  declare maxZoomValue: number

  static values = {
    ...Layer.values,
    url: String,
    minZoom: { type: Number, default: 0 },
    maxZoom: { type: Number, default: 18 },
  }

  connect() {
    this.layer = L.tileLayer(this.urlValue, {
      attribution :this.attributionValue,
      minZoom: this.minZoomValue,
      maxZoom: this.maxZoomValue,
    })
    this.add(this.layer)
  }
}
