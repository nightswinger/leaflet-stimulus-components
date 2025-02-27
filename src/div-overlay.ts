import Layer from "./layer"

export default abstract class DivOverlay extends Layer {
  declare interactiveValue?: boolean
  declare offsetValue?: L.PointExpression
  declare classNameValue?: string
  declare contentValue: string

  static values = {
    interactive: { type: Boolean, default: false },
    offset: { type: Array, default: [0, 0] },
    className: String,
    content: String,
    ...Layer.values
  }

  get options(): L.DivOverlayOptions {
    return {
      interactive: this.interactiveValue,
      offset: this.offsetValue,
      className: this.classNameValue,
      content: this.contentValue
    }
  }
}
