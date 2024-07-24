import { InfoWindow } from "./widget/info/info.js"
import { Bar } from "./widget/bar/bar.js"
import { SettingsWindow } from "./widget/settings/settings.js"


App.config({
    style: './style/style.css',
    icons: "./icons/",
    windows: [
        Bar(),
        SettingsWindow(),
        InfoWindow()
    ],
})

export {}
