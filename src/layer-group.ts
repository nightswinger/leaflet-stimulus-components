import L from "leaflet"
import Layer from "./layer"

export default class LayerGroup extends Layer {
  declare layer: L.LayerGroup

  connect(): void {
    this.element.addEventListener("leaflet:addLayer", this.addLayer.bind(this))

    this.layer = L.layerGroup()
    this.add(this.layer)
  }

  addLayer(event: Event) {
    if (event.target === this.element) return

    const { detail: layer } = event as CustomEvent<L.Layer>

    this.layer.addLayer(layer)

    event.stopPropagation()
  }
}
