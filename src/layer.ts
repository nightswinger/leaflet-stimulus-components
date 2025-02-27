import { Controller } from "@hotwired/stimulus"
import { Layer } from "leaflet"

export default abstract class extends Controller {
  declare layer: Layer
  declare attributionValue: string

  static values = {
    attribution: String
  }

  declare boundBindPopup: (event: Event) => void
  declare boundBindTooltip: (event: Event) => void

  disconnect() {
    this.element.removeEventListener("leaflet:layer:bindPopup", this.boundBindPopup)
    this.element.removeEventListener("leaflet:layer:bindTooltip", this.boundBindTooltip)
  }

  add(layer: Layer) {
    this.dispatch("addLayer", { detail: layer, prefix: "leaflet" })

    this.boundBindPopup = this.bindPopup.bind(this)
    this.boundBindTooltip = this.bindTooltip.bind(this)

    this.element.addEventListener("leaflet:layer:bindPopup", this.boundBindPopup)
    this.element.addEventListener("leaflet:layer:bindTooltip", this.boundBindTooltip)
  }

  bindPopup(event: Event) {
    const { detail: popup } = event as CustomEvent<L.Popup>

    this.layer.bindPopup(popup)
    event.stopPropagation()
  }

  bindTooltip(event: Event) {
    const { detail: tooltip } = event as CustomEvent<L.Tooltip>

    this.layer.bindTooltip(tooltip)
    event.stopPropagation()
  }
}
