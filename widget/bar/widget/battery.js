const battery = await Service.import("battery")

const Battery = () => Widget.Box({
    class_name: "margin-sides",
    children: [
        Widget.Label({
            label: battery.bind("percent").as(v => `${v}% `)
        }),
        Widget.Icon({
            icon: battery.bind("icon_name")
        })
    ]
})

export { Battery }
