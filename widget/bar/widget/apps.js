const LauncherToggle = () => Widget.Button({
    child: Widget.Icon('input-dialpad-symbolic'),
    on_clicked: () => App.toggleWindow("applauncher")
})

export { LauncherToggle }
