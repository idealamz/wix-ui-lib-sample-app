define(['react', 'lodash', 'UI'], function (React, _, UI) {
    return React.createClass({
        displayName: 'template',
        updateAppData: function (data, callback) {
            Wix.Data.Public.get('appData', function(currentData) {
                Wix.Data.Public.set('appData', _.assign(currentData.appData, data), callback);
            }, function () {
                Wix.Data.Public.set('appData', data, callback);
            });
        },
        settingsUpdate: function (data) {
            this.updateAppData(data, Wix.Settings.triggerSettingsUpdatedEvent);
        },
        render: function () {
            return (
                <div>
                    <UI.toggleButtonsGroup
                        defaultValue={[1,3]}
                        onChange={(newVal)=>this.props.settingsUpdate({'toggle_button_group': newVal})}
                        options={[
                            { value: 1, label: 'One'},
                            { value: 2, label: 'Two'},
                            { value: 3, label: 'Three'}
                        ]}
                    />

                    <div>
                        <UI.checkbox
                            wix-param="checkbox_1"
                            onChange={(newVal)=>this.props.settingsUpdate({'checkbox_1': newVal})}
                            label="Checkbox 1"
                            defaultValue={true}
                        />
                        <UI.checkbox
                            wix-param="checkbox_2"
                            onChange={(newVal)=>this.props.settingsUpdate({'checkbox_2': newVal})}
                            label="Checkbox 2"
                        />
                        <UI.checkbox
                            label="Disabled"
                            disabled={true}
                        />
                    </div>

                    <UI.buttonsGroup
                        wix-param="button_group"
                        defaultValue='2'
                        onChange={(newVal)=>this.props.settingsUpdate({'button_group': newVal})}
                        options={[
                            { value: '1', label: 'first'},
                            { value: '2', label: 'second'},
                            { value: '3', label: 'last'}
                        ]}
                    />

                    <UI.radioButtons
                        label="Radio Buttons"
                        wix-param="radio_button_group"
                        defaultValue='2'
                        onChange={(newVal)=>this.props.settingsUpdate({'radio_button_group': newVal})}
                        options={[
                            { value: '1', label: 'first'},
                            { value: '2', label: 'second'},
                            { value: '3', label: 'last'}
                        ]}
                    />

                    <UI.stepper
                        label="Stepper"
                        wix-param="stepper"
                        defaultValue={20}
                        units="km"
                        min="0"
                        max="100"
                        onChange={(newVal)=>this.props.settingsUpdate({'stepper': newVal})}
                    />

                    <UI.slider
                        label="Sample slider"
                        wix-param="slider"
                        onChange={(newVal)=>this.props.settingsUpdate({'slider': newVal})}
                    />
                </div>
            )
        }
    });
});