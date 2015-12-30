define(['react', 'lodash', 'UI'], function (React, _, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <UI.colorPickerSlider
                        label="Background Color"
                        wix-param="style_sample_background_color"
                    />

                    <UI.colorPickerSlider
                        label="Text Color"
                        wix-param="style_sample_text_color"
                    />

                    <UI.fontPicker
                        label="Font"
                        wix-param="style_sample_font"
                        startWithFont="Title"
                        infoTitle="font picker"
                        infoText="font picker"
                    />
                </div>
            )
        }
    });
});