import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  declare divIcon: L.DivIcon
  declare html: string

  declare htmlValue: string | HTMLElement
  declare classNameValue: string

  static values = {
    html: String,
    className: String,
  }

  initialize(): void {
    this.html = this.element.innerHTML
    this.element.innerHTML = ""
  }

  connect() {
    this.divIcon = L.divIcon({
      html: this.htmlValue || this.html,
      className: this.classNameValue,
    })
    this.dispatch("icon:set", { detail: this.divIcon, prefix: "leaflet" })
  }
}
