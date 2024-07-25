import { Battery } from "./widget/battery.js"
import { Network } from "./widget/network.js"
import { ReloadCSS, ResetCSS } from "./widget/css.js"
import { Workspaces } from "./widget/workspaces.js"
import { SettingsToggle } from "../settings/settings.js"
import { Temperature } from "./widget/temperature.js"
import { ColorPicker } from "./widget/colorpicker.js"
import { InfoToggle } from "../info/info.js"
import { LauncherToggle } from "./widget/apps.js"

const LeftBar = () => {
    return Widget.Box({
        hexpand: false,
        children: [
            Widget.Box({
                children: [
                    LauncherToggle(),
                    Workspaces(),
                ]
            })
        ]
    })
}

const CenterBar = () => {
    return Widget.Box({
        children: [
            InfoToggle()
        ]
    })
}

const RightBar = () => {
    return Widget.Box({
        hpack: "end",
        children: [
            ResetCSS(),
            ReloadCSS(),
            Temperature(),
            Battery(),
            ColorPicker(),
            Network(),
            SettingsToggle
        ]
    })
}

const Bar = () => Widget.Window({
    name: "bar",
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    layer: "bottom",
    class_name: "bg",
    child: Widget.CenterBox({
        start_widget: LeftBar(),
        center_widget: CenterBar(),
        end_widget: RightBar(),
    })
})

export { Bar }
