import L from "leaflet"
import layerController from "./layer-controller"

export default class extends layerController {
  declare svgOverlay: L.SVGOverlay

  declare boundsValue: L.LatLngBoundsExpression
  declare contentValue: string

  static values = {
    bounds: Array,
    content: String,
    ...layerController.values
  }

  connect(): void {
    const template = document.createElement("template")
    template.innerHTML = this.contentValue

    this.svgOverlay = L.svgOverlay(template.content.firstElementChild as SVGElement, this.boundsValue)
    this.add(this.svgOverlay)
  }
}
