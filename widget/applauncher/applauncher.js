const { query } = await Service.import("applications")
const WINDOW_NAME = "applauncher"

/** @param {import('resource:///com/github/Aylur/ags/service/applications.js').Application} app */
const AppItem = app => Widget.Button({
    on_clicked: () => {
        App.closeWindow(WINDOW_NAME)
        app.launch()
    },
    attribute: { app },
    child: Widget.Box({
        class_name: "",
        vertical: true,
        tooltip_text: app.icon_name,
        children: [
            Widget.Icon({
                icon: Utils.lookUpIcon(app.icon_name || "") ? app.icon_name || "" : "",
                size: 64,
            }),
            Widget.Label({
                justification: "center",
                vpack: "center",
                label: app.name,
                truncate: "end",
            }),
        ],
    }),
})

const Applauncher = (width = 1000, height = 600) => {
    // list of application buttons
    let applications = query("").map(AppItem)

    // container holding the buttons
    /*
    const list = Widget.Box({
        vertical: true,
        children: applications,
    })
    */
    let list = Widget.FlowBox({
        min_children_per_line: 10,
        setup: self => {
            applications.forEach(app => self.add(app))
            self.show_all()
        }
    })

    // search entry
    const entry = Widget.Entry({
        hexpand: true,
        on_accept: () => {
            // make sure we only consider visible (searched for) applications
	        const results = applications.filter((item) => item.visible);
            if (results[0]) {
                App.toggleWindow(WINDOW_NAME)
                results[0].attribute.app.launch()
            }
        },

        // filter out the list
        on_change: ({ text }) => applications.forEach(item => {
            let found = item.attribute.app.match(text ?? "")
            item.visible = found
        }),
    })

    return Widget.Box({
        vertical: true,
        class_name: "bg round",
        children: [
            entry,

            // wrap the list in a scrollable
            Widget.Scrollable({
                hscroll: "never",
                css: `min-width: ${width}px;`
                    + `min-height: ${height}px;`,
                child: list,
            }),
        ],
        setup: self => self.hook(App, (_, windowName, visible) => {
            if (windowName !== WINDOW_NAME)
                return

            // when the applauncher shows up
            if (visible) {
                entry.text = ""
                entry.grab_focus()
            }
        }),
    })
}

// there needs to be only one instance
export const applauncher = Widget.Window({
    name: WINDOW_NAME,
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(WINDOW_NAME)
    }),
    visible: false,
    keymode: "exclusive",
    child: Applauncher(),
})
