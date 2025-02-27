import L from "leaflet"
import DivOverlay from "./div-overlay"

export default class Tooltip extends DivOverlay {
  declare layer: L.Tooltip

  declare directionValue?: L.Direction
  declare permanentValue?: boolean
  declare stickyValue?: boolean
  declare opacityValue?: number

  static values = {
    ...DivOverlay.values,
    direction: { type: String, default: "auto" },
    permanent: { type: Boolean, default: false },
    sticky: { type: Boolean, default: false },
    opacity: { type: Number, default: 0.9 },
  }

  connect(): void {
    this.layer = L.tooltip(this.options)
    this.dispatch("layer:bindTooltip", { detail: this.layer, prefix: "leaflet" })
  }

  get options(): L.TooltipOptions {
    return {
      ...super.options,
      direction: this.directionValue,
      permanent: this.permanentValue,
      sticky: this.stickyValue,
      opacity: this.opacityValue,
    }
  }
}
