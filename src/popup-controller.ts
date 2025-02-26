import L from "leaflet"
import LayerController from "./layer-controller"

export default class extends LayerController {
  declare layer: L.Popup

  declare offsetValue?: L.PointExpression
  declare maxWidthValue?: number
  declare minWidthValue?: number
  declare maxHeightValue?: number
  declare classNameValue?: string

  declare contentValue: string

  static values = {
    content: String,

    offset: { type: Array, default: [0, 7] },
    maxWidth: { type: Number, default: 300 },
    minWidth: { type: Number, default: 50 },
    maxHeight: { type: Number, default: null },
    className: String,
    ...LayerController.values
  }

  connect() {
    this.layer = L.popup({
      offset: this.offsetValue,
      maxWidth: this.maxWidthValue,
      minWidth: this.minWidthValue,
      maxHeight: this.maxHeightValue,
      className: this.classNameValue,
      content: this.contentValue
    })
    this.dispatch("popup:bindTo", { detail: this.layer, prefix: "leaflet" })
  }
}
