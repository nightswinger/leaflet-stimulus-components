import L from "leaflet"
import Layer from "./layer"

export default class extends Layer {
  declare urlValue: string
  declare boundsValue: L.LatLngBoundsExpression

  declare opacityValue: number
  declare altValue: string
  declare interactiveValue: boolean
  declare crossOriginValue: boolean | L.CrossOrigin
  declare zIndexValue: number
  declare classNameValue: string

  declare hasCrossOriginValue: boolean

  static values = {
    ...Layer.values,
    url: String,
    bounds: Array,
    opacity: { type: Number, default: 1 },
    alt: String,
    interactive: Boolean,
    crossOrigin: String,
    zIndex: { type: Number, default: 1 },
    className: String
  }

  connect() {
    const image = new Image()
    image.src = this.urlValue
    image.onload = () => {
      const bounds = this.boundsValue || [
        [0, 0],
        [image.height, image.width]
      ]
      this.layer = L.imageOverlay(this.urlValue, bounds, this.options)
      this.add(this.layer)
    }
  }

  get options(): L.ImageOverlayOptions {
    return {
      opacity: this.opacityValue,
      alt: this.altValue,
      interactive: this.interactiveValue,
      crossOrigin: this.hasCrossOriginValue ? this.crossOriginValue : false,
      zIndex: this.zIndexValue,
      className: this.classNameValue
    }
  }
}
