import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  declare divIcon: L.DivIcon

  declare iconSizeValue: L.PointExpression
  declare iconAnchorValue: L.PointExpression
  declare popupAnchorValue: L.PointExpression

  declare htmlValue: string | HTMLElement
  declare classNameValue: string

  static values = {
    iconSize: { type: Array, default: null },
    iconAnchor: { type: Array, default: null },
    popupAnchor: { type: Array, default: [0, 0] },
  
    html: String,
    className: String,
  }

  connect() {
    this.divIcon = L.divIcon({
      iconSize: this.iconSizeValue,
      iconAnchor: this.iconAnchorValue,
      popupAnchor: this.popupAnchorValue,
      html: this.htmlValue,
      className: this.classNameValue,
    })
    this.dispatch("icon:set", { detail: this.divIcon, prefix: "leaflet" })
  }
}
