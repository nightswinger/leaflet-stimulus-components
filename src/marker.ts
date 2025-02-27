import L from "leaflet"
import Layer from "./layer"

export default class extends Layer {
  declare positionValue: L.LatLngExpression
  declare draggableValue: boolean

  static values = {
    position: Array,
    draggable: { type: Boolean, default: false },
    ...Layer.values
  }

  get marker(): L.Marker {
    return this.layer as L.Marker
  }

  connect() {
    this.layer = L.marker(this.positionValue, { draggable: this.draggableValue })
    this.add(this.layer)

    this.element.addEventListener("leaflet:icon:set", this.setIcon.bind(this))
  }

  setIcon(event: Event) {
    const { detail: icon } = event as CustomEvent<L.Icon>

    this.marker.setIcon(icon)
    event.stopPropagation()
  }
}
