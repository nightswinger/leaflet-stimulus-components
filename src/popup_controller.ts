import L from "leaflet"
import LayerController from "./layer_controller"

export default class extends LayerController {
  declare popup: L.Popup

  declare contentValue: string

  static values = {
    content: String,
    ...LayerController.values
  }

  connect() {
    this.popup = L.popup().setContent(this.contentValue)
    this.dispatch("popup:bindTo", { detail: this.popup, prefix: "leaflet" })
  }
}
