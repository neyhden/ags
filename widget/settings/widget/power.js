const Reboot = () => Widget.Button({
    class_name: "round",
    child: Widget.Label({
        label: " Reboot"
    }),
    on_clicked: () => Utils.exec("reboot")
})

const PowerOff = () => Widget.Button({
    class_name: "round",
    child: Widget.Label({
        label: "⏻ Shut down"
    }),
    on_clicked: () => Utils.exec("systemctl poweroff")
})

const PowerBox = () => Widget.Box({
    vertical: true,
    class_name: "cell round",
    children: [
        PowerOff(),
        Reboot()
    ]
})

let PowerRevealer = Widget.Revealer({
    reveal_child: false,
    transition: "slide_right",
    child: PowerBox()
})

const PowerToggler = () => Widget.Button({
    class_name: "round cell-button",
    child: Widget.Label("⏻"),
    on_clicked: () => PowerRevealer.reveal_child = !PowerRevealer.reveal_child
})

const Power = () => Widget.Box({
    hpack: "end",
    children: [
        PowerRevealer,
        PowerToggler(),
    ]
})

export { Power }
