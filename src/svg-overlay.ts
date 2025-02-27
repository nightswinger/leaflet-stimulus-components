import L from "leaflet"
import layer from "./layer"

export default class extends layer {
  declare boundsValue: L.LatLngBoundsExpression
  declare contentValue: string

  static values = {
    bounds: Array,
    content: String,
    ...layer.values
  }

  connect(): void {
    const template = document.createElement("template")
    template.innerHTML = this.contentValue

    this.layer = L.svgOverlay(template.content.firstElementChild as SVGElement, this.boundsValue)
    this.add(this.layer)
  }
}
