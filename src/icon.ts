import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class Icon extends Controller {
  declare icon: L.Icon

  declare iconUrlValue: string
  declare iconRetinaUrlValue?: string
  declare iconSizeValue?: L.PointExpression
  declare iconAnchorValue?: L.PointExpression
  declare popupAnchorValue?: L.PointExpression
  declare tooltipAnchorValue?: L.PointExpression
  declare shadowUrlValue?: string
  declare shadowRetinaUrlValue?: string
  declare shadowSizeValue?: L.PointExpression
  declare shadowAnchorValue?: L.PointExpression
  declare classNameValue?: string

  static values = {
    iconUrl: { type: String, default: null },
    iconRetinaUrl: { type: String, default: null },
    iconSize: { type: Array, default: null },
    iconAnchor: { type: Array, default: null },
    popupAnchor: { type: Array, default: [0, 0] },
    tooltipAnchor: { type: Array, default: [0, 0] },
    shadowUrl: { type: String, default: null },
    shadowRetinaUrl: { type: String, default: null },
    shadowSize: { type: Array, default: null },
    shadowAnchor: { type: Array, default: null },
    className: { type: String, default: "" },
  }

  connect(): void {
    this.icon = L.icon(this.options)
    this.dispatch("icon:set", { detail: this.icon, prefix: "leaflet" })
  }

  get options(): L.IconOptions {
    return {
      iconUrl: this.iconUrlValue,
      iconRetinaUrl: this.iconRetinaUrlValue,
      iconSize: this.iconSizeValue,
      iconAnchor: this.iconAnchorValue,
      popupAnchor: this.popupAnchorValue,
      tooltipAnchor: this.tooltipAnchorValue,
      shadowUrl: this.shadowUrlValue,
      shadowRetinaUrl: this.shadowRetinaUrlValue,
      shadowSize: this.shadowSizeValue,
      shadowAnchor: this.shadowAnchorValue,
      className: this.classNameValue,
    }
  }
}
