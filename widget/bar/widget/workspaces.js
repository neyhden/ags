const hyprland = await Service.import('hyprland')

const dispatch = (/** @type {string | number} */ ws) => hyprland.messageAsync(`dispatch workspace ${ws}`);

const Workspaces = () => Widget.EventBox({
    onScrollUp: () => dispatch('e-1'),
    onScrollDown: () => dispatch('e+1'),
    child: Widget.Box({
        class_name: "bg round",
        children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
            attribute: i,
            child: Widget.Label({
                label: hyprland.active.workspace.bind("id").as(id => {
                    if (i === id) return ''
                    if (!hyprland.getWorkspace(i)) return ''
                    if (!hyprland.getWorkspace(i)?.windows) return ''
                    return ''
                })
            }),
            onClicked: () => dispatch(i),
        })),
    }),
})

export { Workspaces }
