import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  declare divIcon: L.DivIcon

  declare htmlValue: string | HTMLElement
  declare classNameValue: string

  static values = {
    html: String,
    className: String,
  }

  connect() {
    this.divIcon = L.divIcon({
      html: this.htmlValue,
      className: this.classNameValue,
    })
    this.dispatch("icon:set", { detail: this.divIcon, prefix: "leaflet" })
  }
}
