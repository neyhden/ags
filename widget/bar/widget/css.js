const ReloadCSS = () => Widget.Button({
    on_clicked: () => {
        const scss = `${App.configDir}/style/style.scss`
        const css = `${App.configDir}/style/style.css`
        Utils.exec(`sassc ${scss} ${css}`)
        App.resetCss()
        App.applyCss(css)
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
