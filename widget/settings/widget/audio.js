const audio = await Service.import("audio")

const icons = {
    speaker: {
        muted: "audio-volume-muted-symbolic",
        low: "audio-volume-low-symbolic",
        medium: "audio-volume-medium-symbolic",
        high: "audio-volume-high-symbolic",
    },
    microphone: {
        muted: "microphone-disabled-symbolic",
        low: "microphone-sensitivity-low-symbolic",
        medium: "microphone-sensitivity-medium-symbolic",
        high: "microphone-sensitivity-high-symbolic",
    }
}

const getIcon = (/** @type {string} */ type, /** @type {boolean | null} */ muted, /** @type {number} */ volume) => {
    if (muted) return icons[type].muted
    if (volume < 0.3) return icons[type].low
    if (volume < 0.6) return icons[type].medium
    return icons[type].high
}

const VolumeSlider = (type = 'speaker') => Widget.Slider({
    hexpand: true,
    min: 0,
    max: 1,
    draw_value: false,
    onChange: ({ value }) => audio[type].volume = value,
    value: audio[type].bind('volume'),
})

const VolumeButton = (/** @type { "speaker" | "microphone" } */type = "speaker") => Widget.Button({
    on_clicked: () => audio[type].is_muted = !audio[type].is_muted,
    child: Widget.Icon().hook(audio[type], self => {
        self.icon = getIcon(type, audio[type].is_muted, audio[type].volume)
    })
})

const VolumeValue = (type = "speaker") => Widget.Label({
    label: audio[type].bind("volume").as((/** @type {number} */ v) => `${(v*100).toFixed(0)}%`)
})

const SpeakerSlider = () => VolumeSlider('speaker')
const MicSlider = () => VolumeSlider('microphone')

const SpeakerButton = () => VolumeButton("speaker")
const MicButton = () => VolumeButton("microphone")

const SpeakerValue = () => VolumeValue("speaker")
const MicValue = () => VolumeValue("microphone")

const SpeakerBox = () => Widget.Box({
    children: [
        SpeakerButton(),
        SpeakerSlider(),
        SpeakerValue(),
    ]
})
const MicBox = () => Widget.Box({
    children: [
        MicButton(),
        MicSlider(),
        MicValue(),
    ]
})

const VolumeBox = () => Widget.Box({
    vertical: true,
    class_name: "cell round",
    children: [
        SpeakerBox(),
        MicBox(),
    ]
})

export { VolumeBox }
