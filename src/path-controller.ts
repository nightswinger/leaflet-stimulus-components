import LayerController from "./layer-controller"

export default abstract class extends LayerController {
  declare strokeValue: boolean
  declare colorValue: string
  declare weightValue: number
  declare opacityValue: number
  declare lineCapValue: string
  declare lineJoinValue: string
  declare dashArrayValue: string
  declare dashOffsetValue: string
  declare fillValue: boolean
  declare fillColorValue: string
  declare fillOpacityValue: number
  declare fillRuleValue: string
  declare bubblingMouseEventsValue: boolean
  declare classNameValue: string

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

    ...LayerController.values
  }
}
