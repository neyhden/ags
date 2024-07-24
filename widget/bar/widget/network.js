const network = await Service.import("network")

const Network = () => Widget.Icon({
    icon: network.bind("primary").as(v => {
        if (v == "wired") return network.wired.icon_name;
        return network.wifi.icon_name
    }),
})

export { Network }
