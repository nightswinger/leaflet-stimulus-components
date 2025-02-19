import L from "leaflet"
import LayerController from "./layer_controller"

export default class extends LayerController {
  declare popup: L.Popup
  declare content: string

  declare contentValue: string

  static values = {
    content: String,
    ...LayerController.values
  }

  initialize(): void {
    this.content = this.element.innerHTML
    this.element.innerHTML = ""
  }

  connect() {
    this.popup = L.popup({ content: this.contentValue || this.content })
    this.dispatch("popup:bindTo", { detail: this.popup, prefix: "leaflet" })
  }
}
