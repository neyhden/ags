import { VolumeBox } from "./widget/audio.js"
import { BacklightBox } from "./widget/backlight.js"
import { Power } from "./widget/power.js"
import { Toggles } from "./widget/toggles.js"

const SettingsToggle = Widget.Button({
    on_clicked: () => App.toggleWindow("settings"),
    class_name: "bg",
    child: Widget.Label({
        label: '⏼'
    })
})


const SettingsWindow = () => Widget.Window({
    name: "settings",
    visible: false,
    anchor: ["top", "right"],
    margins: [5, 5, 0, 0],
    exclusivity: "exclusive",
    layer: "overlay",
    child: Widget.Box({
        vertical: true,
        class_name: "bg round",
        children: [
            Power(),
            VolumeBox(),
            BacklightBox(),
            Toggles()
        ]
    }),
})

export { SettingsWindow, SettingsToggle }
