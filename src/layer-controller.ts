import { Controller } from "@hotwired/stimulus"
import { Layer } from "leaflet"

export default abstract class extends Controller {
  declare layer: Layer
  declare attributionValue: string

  static values = {
    attribution: String
  }

  add(layer: Layer) {
    this.dispatch("addLayer", { detail: layer, prefix: "leaflet" })
  }
}
