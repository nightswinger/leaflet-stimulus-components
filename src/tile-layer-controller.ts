import L from "leaflet"
import LayerController from "./layer-controller"

export default class extends LayerController {
  declare urlValue: string

  static values = {
    url: String,
    ...LayerController.values
  }

  connect() {
    this.layer = L.tileLayer(this.urlValue, {
      attribution :this.attributionValue
    })
    this.add(this.layer)
  }
}
