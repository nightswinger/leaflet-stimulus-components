import L from "leaflet"
import LayerController from "./layer-controller"

export default class extends LayerController {
  declare imageOverlay: L.ImageOverlay

  declare urlValue: string
  declare boundsValue: L.LatLngBoundsExpression

  static values = {
    url: String,
    bounds: Array,
    ...LayerController.values
  }

  connect() {
    const image = new Image()
    image.src = this.urlValue
    image.onload = () => {
      const bounds = this.boundsValue || [
        [0, 0],
        [image.height, image.width]
      ]
      this.imageOverlay = L.imageOverlay(this.urlValue, bounds)
      this.add(this.imageOverlay)
    }
  }
}
