import Layer from "./layer"

export default abstract class extends Layer {
  declare strokeValue: boolean
  declare colorValue: string
  declare weightValue: number
  declare opacityValue: number
  declare lineCapValue: L.LineCapShape
  declare lineJoinValue: L.LineJoinShape
  declare dashArrayValue: string
  declare dashOffsetValue: string
  declare fillValue: boolean
  declare fillColorValue: string
  declare fillOpacityValue: number
  declare fillRuleValue: L.FillRule
  declare bubblingMouseEventsValue: boolean
  declare classNameValue: string

  declare hasStrokeValue: boolean
  declare hasColorValue: boolean
  declare hasWeightValue: boolean
  declare hasOpacityValue: boolean
  declare hasLineCapValue: boolean
  declare hasLineJoinValue: boolean
  declare hasDashArrayValue: boolean
  declare hasDashOffsetValue: boolean
  declare hasFillValue: boolean
  declare hasFillColorValue: boolean
  declare hasFillOpacityValue: boolean
  declare hasFillRuleValue: boolean
  declare hasBubblingMouseEventsValue: boolean
  declare hasClassNameValue: boolean

  static values = {
    stroke: { type: Boolean, default: true },
    color: { type: String, default: "#3388ff" },
    weight: { type: Number, default: 3 },
    opacity: { type: Number, default: 1 },
    lineCap: { type: String, default: "round" },
    lineJoin: { type: String, default: "round" },
    dashArray: { type: String, default: null },
    dashOffset: { type: String, default: null },
    fill: Boolean,
    fillColor: String,
    fillOpacity: { type: Number, default: 0.2 },
    fillRule: { type: String, default: "evenodd" },
    bubblingMouseEvents: { type: Boolean, default: true },
    className: String,

    ...Layer.values
  }

  get options(): L.PathOptions {
    const _options: L.PathOptions = {}

    if (this.hasStrokeValue) _options.stroke = this.strokeValue
    if (this.hasColorValue) _options.color = this.colorValue
    if (this.hasWeightValue) _options.weight = this.weightValue
    if (this.hasOpacityValue) _options.opacity = this.opacityValue
    if (this.hasLineCapValue) _options.lineCap = this.lineCapValue
    if (this.hasLineJoinValue) _options.lineJoin = this.lineJoinValue
    if (this.hasDashArrayValue) _options.dashArray = this.dashArrayValue
    if (this.hasDashOffsetValue) _options.dashOffset = this.dashOffsetValue
    if (this.hasFillValue) _options.fill = this.fillValue
    if (this.hasFillColorValue) _options.fillColor = this.fillColorValue
    if (this.hasFillOpacityValue) _options.fillOpacity = this.fillOpacityValue
    if (this.hasFillRuleValue) _options.fillRule = this.fillRuleValue
    if (this.hasBubblingMouseEventsValue) _options.bubblingMouseEvents = this.bubblingMouseEventsValue
    if (this.hasClassNameValue) _options.className = this.classNameValue

    return _options
  }
}
