import L from "leaflet"
import LayerController from "./layer-controller"

export default class extends LayerController {
  declare tileLayer: L.TileLayer

  declare urlValue: string

  static values = {
    url: String,
    ...LayerController.values
  }

  connect() {
    this.tileLayer = L.tileLayer(this.urlValue, {
      attribution :this.attributionValue
    })
    this.add(this.tileLayer)
  }
}
