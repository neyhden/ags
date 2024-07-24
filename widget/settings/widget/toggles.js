const network = await Service.import("network")
const bluetooth = await Service.import("bluetooth")

const WifiToggle = () => Widget.ToggleButton({
    class_name: "cell toggle",
    active: network.wifi.enabled ? true : false,
    on_toggled: () => {
        network.toggleWifi()
    },
    child: Widget.Label('')
})

const BluetoothToggle = () => Widget.ToggleButton({
    class_name: "cell toggle",
    active: bluetooth.enabled ? true : false,
    on_toggled: () => {
        bluetooth.toggle()
    },
    child: Widget.Label('󰂯')
})

const TouchpadToggle = () => Widget.ToggleButton({
    class_name: "cell toggle",
    active: false,
    on_toggled: ({ active }) => {
        Utils.exec(`hyprctl keyword "device[cust0001:00-04f3:30fa-touchpad]:enabled" "${active ? "true" : "false"}"`)
    },
    child: Widget.Label('')
})

const Toggles = () => Widget.Box({
    class_name: "togglebox cell",
    vertical: true,
    children: [
        Widget.Box({
            hpack: "center",
            children: [
                WifiToggle(),
                BluetoothToggle(),
                TouchpadToggle(),
            ]
        }),
    ]
})

export { Toggles }
