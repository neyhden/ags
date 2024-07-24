const battery = await Service.import("battery")

const Battery = () => Widget.Box({
    children: [
        Widget.Label({
            label: battery.bind("percent").as(v => `${v}%`)
        }),
        Widget.Icon({
            icon: battery.bind("icon_name")
        })
    ]
})

export { Battery }
