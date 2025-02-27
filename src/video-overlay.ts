import L from "leaflet"
import imageOverlay from "./image-overlay"

export default class VideoOverlay extends imageOverlay {
  declare layer: L.VideoOverlay
  declare urlValue: string

  declare autoplayValue: boolean
  declare loopValue: boolean
  declare keepAspectRatioValue: boolean
  declare mutedValue: boolean
  declare playsInlineValue: boolean

  static values = {
    ...imageOverlay.values,
    url: String,
    autoplay: { type: Boolean, default: true },
    loop: { type: Boolean, default: true },
    keepAspectRatio: { type: Boolean, default: true },
    muted: { type: Boolean, default: false },
    playsInline: { type: Boolean, default: true },
  }

  connect(): void {
    this.layer = L.videoOverlay(this.urlValue, this.boundsValue, this.options)
    this.add(this.layer)
  }

  get options(): L.VideoOverlayOptions {
    return {
      ...super.options,
      autoplay: this.autoplayValue,
      loop: this.loopValue,
      keepAspectRatio: this.keepAspectRatioValue,
      muted: this.mutedValue,
      playsInline: this.playsInlineValue,
    }
  }
}
