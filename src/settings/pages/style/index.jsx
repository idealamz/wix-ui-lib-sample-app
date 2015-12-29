define(['react', 'lodash', 'UI'], function (React, _, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <UI.colorPickerSlider
                        label="Color Picker Slider"
                        wix-param="color_picker"
                        startWithOpacity={0.5}
                        onChange={(newVal)=>this.props.settingsUpdate({'color_picker': newVal})}
                    />

                    <UI.fontPicker
                        label="Font Picker"
                        wix-param="font_picker"
                        startWithFont="Site Title"
                        infoTitle="font picker"
                        infoText="font picker"
                        onChange={(newVal)=>this.props.settingsUpdate({'font_picker': newVal})}
                    />
                </div>
            )
        }
    });
});