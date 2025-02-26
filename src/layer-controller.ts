import { Controller } from "@hotwired/stimulus"
import { Layer } from "leaflet"

export default abstract class extends Controller {
  declare layer: Layer
  declare attributionValue: string

  static values = {
    attribution: String
  }

  declare boundBindPopup: (event: Event) => void

  connect() {
    this.boundBindPopup = this.bindPopup.bind(this)
    this.element.addEventListener("leaflet:layer:bindPopup", this.boundBindPopup)
  }

  disconnect() {
    this.element.removeEventListener("leaflet:layer:bindPopup", this.boundBindPopup)
  }

  add(layer: Layer) {
    this.dispatch("addLayer", { detail: layer, prefix: "leaflet" })
  }

  bindPopup(event: Event) {
    const { detail: popup } = event as CustomEvent<L.Popup>

    this.layer.bindPopup(popup)
    event.stopPropagation()
  }
}
