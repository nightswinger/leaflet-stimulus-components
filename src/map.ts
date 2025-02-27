import { Controller } from "@hotwired/stimulus"
import L, { LatLngExpression } from "leaflet"

export default class extends Controller<HTMLElement> {
  declare map: L.Map

  declare draggingValue: boolean
  declare zoomSnapValue: number

  declare crsValue: string
  declare centerValue: LatLngExpression
  declare zoomValue: number
  declare minZoomValue: number
  declare maxZoomValue: number

  static values = {
    dragging: { type: Boolean, default: true },
    zoomSnap: { type: Number, default: 1 },

    crs: String,
    center: { type: Array, default: undefined },
    zoom: { type: Number, default: undefined },
    minZoom: Number,
    maxZoom: Number,
  }

  CRSs: Record<string, L.CRS> = {
    "simple": L.CRS.Simple,
  }

  connect(): void {
    this.element.addEventListener("leaflet:addLayer", this.addLayer.bind(this))

    const options: L.MapOptions = {
      dragging: this.draggingValue,
      zoomSnap: this.zoomSnapValue,

      crs: this.CRSs[this.crsValue] || L.CRS.EPSG3857,
      center: this.centerValue,
      zoom: this.zoomValue,
    }

    if (this.minZoomValue) options.minZoom = this.minZoomValue
    if (this.maxZoomValue) options.maxZoom = this.maxZoomValue

    this.map = L.map(this.element, options)
  }

  addLayer(event: Event) {
    if (!this.element.contains(event.target as Node)) return

    const { detail: layer } = event as CustomEvent<L.Layer>
    layer.addTo(this.map)

    if (this.crsValue) {
      this.map.fitBounds((layer as L.ImageOverlay).getBounds())
    }

    event.stopPropagation()
  }
}
