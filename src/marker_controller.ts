import L from "leaflet"
import LayerController from "./layer_controller"

export default class extends LayerController {
  declare marker: L.Marker

  declare positionValue: L.LatLngExpression
  declare draggableValue: boolean

  static values = {
    position: Array,
    draggable: { type: Boolean, default: false },
    ...LayerController.values
  }

  connect() {
    console.log("MarkerController#connect")
    this.marker = L.marker(this.positionValue, { draggable: this.draggableValue })
    this.add(this.marker)

    this.element.addEventListener("leaflet:popup:bindTo", this.bindPopup.bind(this))
    this.element.addEventListener("leaflet:icon:set", this.setIcon.bind(this))
  }

  bindPopup(event: Event) {
    const { detail: popup } = event as CustomEvent<L.Popup>

    this.marker.bindPopup(popup)
    event.stopPropagation()
  }

  setIcon(event: Event) {
    const { detail: icon } = event as CustomEvent<L.Icon>

    this.marker.setIcon(icon)
    event.stopPropagation()
  }
}
