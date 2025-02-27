import L from "leaflet"
import Icon from "./icon"

export default class extends Icon {
  declare divIcon: L.DivIcon

  declare htmlValue: string | HTMLElement

  static values = {
    ...Icon.values,
    html: String,
  }

  connect() {
    this.divIcon = L.divIcon({
      ...this.options,
      html: this.htmlValue,
    })
    this.dispatch("icon:set", { detail: this.divIcon, prefix: "leaflet" })
  }
}
