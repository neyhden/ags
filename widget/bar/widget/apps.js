const LauncherToggle = () => Widget.Button({
    child: Widget.Label('󰣇'),
    on_clicked: () => App.toggleWindow("applauncher")
})

export { LauncherToggle }
