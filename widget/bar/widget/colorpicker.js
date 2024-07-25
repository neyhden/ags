const ColorPicker = () => Widget.Button({
    class_name: "margin-sides",
    on_clicked: () => Utils.execAsync("hyprpicker -a -n"),
    child: Widget.Label("")
})

export { ColorPicker }
