const ReloadCSS = () => Widget.Button({
    on_clicked: () => {
        App.resetCss()
        App.applyCss(`${App.configDir}/style/style.css`)
    },
    child: Widget.Label({
        label: "",
    })
})

const ResetCSS = () => Widget.Button({
    on_clicked: () => {
        App.resetCss()
    },
    child: Widget.Label({
        label: "󰃐",
    })
})

export { ReloadCSS, ResetCSS }
