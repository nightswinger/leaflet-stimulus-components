import L from "leaflet"
import Layer from "./layer"

export default class extends Layer {
  declare urlValue: string

  static values = {
    url: String,
    ...Layer.values
  }

  connect() {
    this.layer = L.tileLayer(this.urlValue, {
      attribution :this.attributionValue
    })
    this.add(this.layer)
  }
}
