const hyprland = await Service.import('hyprland')

const dispatch = (/** @type {string | number} */ ws) => hyprland.messageAsync(`dispatch workspace ${ws}`);

const Workspaces = () => Widget.EventBox({
    onScrollUp: () => dispatch('e-1'),
    onScrollDown: () => dispatch('e+1'),
    child: Widget.Box({
        class_name: "margin-sides",
        children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
            class_name: hyprland.active.workspace.bind("id").as(id => {
                if (i === id) return "workspace-active"
                if (!hyprland.getWorkspace(i)) return "workspace-empty"
                if (!hyprland.getWorkspace(i)?.windows) return "workspace-empty"
                return "workspace-idle"
            }),
            attribute: i,
            onClicked: () => dispatch(i),
            child: Widget.Box({
                vpack: "center",
            })
        })),
    }),
})

export { Workspaces }
