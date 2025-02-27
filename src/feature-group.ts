import L from "leaflet"
import LayerGroup from "./layer-group"

export default class FeatureGroup extends LayerGroup {
  declare layer: L.FeatureGroup

  connect(): void {
    this.element.addEventListener("leaflet:addLayer", this.addLayer.bind(this))

    this.layer = L.featureGroup()
    this.add(this.layer)
  }
}
