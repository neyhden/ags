const ColorPicker = () => Widget.Button({
    class_name: "bg",
    on_clicked: () => Utils.execAsync("hyprpicker -a -n"),
    child: Widget.Label("")
})

export { ColorPicker }
