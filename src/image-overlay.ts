import L from "leaflet"
import Layer from "./layer"

export default class extends Layer {
  declare urlValue: string
  declare boundsValue: L.LatLngBoundsExpression

  static values = {
    url: String,
    bounds: Array,
    ...Layer.values
  }

  connect() {
    const image = new Image()
    image.src = this.urlValue
    image.onload = () => {
      const bounds = this.boundsValue || [
        [0, 0],
        [image.height, image.width]
      ]
      this.layer = L.imageOverlay(this.urlValue, bounds)
      this.add(this.layer)
    }
  }
}
