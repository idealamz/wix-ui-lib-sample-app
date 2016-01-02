define(['react', 'lodash', 'UI'], function (React, _, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <UI.colorPickerSlider
                        label="Background Color"
                        startWithColor="color-1"
                        wix-param="style_sample_background_color"
                    />

                    <UI.colorPickerSlider
                        label="Text Color"
                        startWithColor="color-2"
                        wix-param="style_sample_text_color"
                    />

                    <UI.fontPicker
                        label="Font"
                        wix-param="style_sample_font"
                        startWithFont="Title"
                        infoTitle="font picker"
                        infoText="font picker"
                    />

                    <UI.slider
                        label="Box Height"
                        wix-param="style_sample_box_height"
                        defaultValue={100}
                        units="px"
                        min="0"
                        max="100"
                    />

                    <UI.slider
                        label="Box Width"
                        wix-param="style_sample_box_width"
                        defaultValue={100}
                        units="%"
                        min="0"
                        max="100"
                    />

                </div>
            )
        }
    });
});