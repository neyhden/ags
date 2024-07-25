import { Calendar } from "./widget/calendar.js"

const InfoToggle = () => Widget.Button({
    child: Widget.Label().poll(1000, self => self.label = Utils.exec("date '+%H:%M'")),
    on_clicked: () => App.toggleWindow("info")
})

const InfoWindow = () => Widget.Window({
    name: "info",
    visible: false,
    anchor: ["top"],
    margins: [5, 0, 0, 0],
    exclusivity: "normal",
    layer: "overlay",
    child: Widget.Box({
        vertical: true,
        class_name: "bg round",
        children: [
            Calendar()
        ]
    }),
})

export { InfoToggle, InfoWindow }
