import L from "leaflet"
import DivOverlay from "./div-overlay"

export default class extends DivOverlay {
  declare layer: L.Popup

  declare offsetValue?: L.PointExpression
  declare maxWidthValue?: number
  declare minWidthValue?: number
  declare maxHeightValue?: number
  declare classNameValue?: string

  declare contentValue: string

  static values = {
    ...DivOverlay.values,

    offset: { type: Array, default: [0, 7] },
    maxWidth: { type: Number, default: 300 },
    minWidth: { type: Number, default: 50 },
    maxHeight: { type: Number, default: null }
  }

  connect() {
    this.layer = L.popup(this.options)
    this.dispatch("layer:bindPopup", { detail: this.layer, prefix: "leaflet" })
  }

  get options(): L.PopupOptions {
    return {
      ...super.options,
      maxWidth: this.maxWidthValue,
      minWidth: this.minWidthValue,
      maxHeight: this.maxHeightValue,
    }
  }
}
