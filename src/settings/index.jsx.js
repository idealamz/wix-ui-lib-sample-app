define([
        'react',
        'lodash',
        'UI'/*,
        'settings/pages/general/index',
        'settings/pages/style/index',
        'settings/pages/sync/index'*/
    ],
    function (
        React,
    _,
    UI/*,
    generalPage,
    stylePage,
    syncPage*/
    ) {
    return React.createClass({
        displayName: 'template',
        updateAppData: function (data,
                                 callback) {
            Wix.Data.Public.get('appData', function(currentData) {
                Wix.Data.Public.set('appData', _.assign(currentData.appData, data), callback);
            }, function () {
                Wix.Data.Public.set('appData', data, callback);
            });
        },
        settingsUpdate: function (data) {
            this.updateAppData(data, Wix.Settings.triggerSettingsUpdatedEvent);
        },
        render: function() {
            return (
                <div>
                    <header className="header">
                        <div className="icon">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw" alt=""/>
                        </div>
                        <div className="right">
                            <div className="container">
                                <div className="text">
                                    This is a sample Settings view for widgets and pages created with <a href="http://dev.wix.com"
                                                                                                         target="#">Wix's 3rd Party SDK</a>,
                                    compatible with Wix's product requirements.
                                    This boilerplate is aimed at saving time for developing the UI of your apps, and let the
                                    developer focus on developing logic.
                                </div>
                                <div className="button">
                                    <UI.button label="connect account" className="btn-primary"></UI.button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <UI.tabs.holder defaultTab="first" className="top">
                        <UI.tabs.header>
                            <UI.tabs.label for="first" className="first">General Settings</UI.tabs.label>
                            <UI.tabs.label for="second" className="second">Color Settings</UI.tabs.label>
                            <UI.tabs.label for="third" className="third">Sync Options</UI.tabs.label>
                        </UI.tabs.header>
                        <UI.tabs.content>
                            <UI.tabs.tab name="first" className="my-custom-tab">
                                <div>
                                    <UI.dropDownSelect
                                        wix-param="imageVisibility"
                                        style={{width: '240px'}}
                                        defaultValue="1"
                                        onChange={(newVal)=>console.log(newVal + 'selected')}
                                        label="Image visibility"
                                        options={[
                                    { value: '1', label: 'Show Images', className: 'firstOne'},
                                    { value: '2', label: 'Hide Images', className: 'differentOne'},
                                    { value: '3', label: 'Show Images on Hover'}
                                    ]}
                                        infoTitle="image visibility"
                                        infoText="image visibility">
                                    </UI.dropDownSelect>
                                </div>
                                <div style={{marginBottom: '50px'}}>
                                    <UI.dock
                                        defaultValue="TOP_LEFT"
                                        label="Fixed Position"
                                        onPreviewHover={(newVal)=>console.log(newVal + 'hovered')}
                                        onChange={(newVal)=>console.log(newVal)}
                                        />
                                </div>
                                <div style={{marginBottom: '50px', width: '200px'}}>
                                    <UI.languagePicker
                                        label="Language Picker"
                                        infoTitle="info title"
                                        infoText="info text"
                                        onChange={function(a){console.log(a);}}
                                        />
                                </div>
                                <div style={{marginBottom: '50px', width: '400px'}}>
                                    <UI.slider
                                        style={{width: '300px'}}
                                        defaultValue={100}
                                        label="Number of images"
                                        min={0}
                                        max={500}
                                        maxlength={40}
                                        wix-param="sliderValue"
                                        onSlideEnd={(newVal)=>console.log('slide end ' + newVal)}
                                        onChange={(newVal)=>console.log('slide change ' + newVal)}
                                        />
                                </div>
                                <div style={{marginBottom: '50px', width: '200px'}}>
                                    <UI.fontPicker
                                        label="Fonts"
                                        wix-param="myBodyFont"
                                        infoTitle="font picker"
                                        infoText="font picker">
                                    </UI.fontPicker>
                                </div>
                                <div style={{margin: '50px 0', width: '200px'}}>
                                    <UI.textInput
                                        validator={function(val) {return val.length < 15}}
                                        label="Email address"
                                        placeholder="john@doe.com"
                                        infoText="Knowledge is power, this is just a text info"
                                        invalidMessage="Invalid Input."
                                        focus={false}
                                        onChange={(newVal)=>console.log(newVal)}
                                        />
                                </div>
                            </UI.tabs.tab>

                            <UI.tabs.tab name="second">
                                <div style={{margin: '50px 0'}}>
                                    <UI.colorPickerSlider label="Text Color" wix-param="myTextColor" startWithColor="color-22" startWithOpacity={1}></UI.colorPickerSlider>
                                    <UI.colorPickerSlider label="Background Color" wix-param="myBgColor" startWithOpacity={0.5}></UI.colorPickerSlider>
                                </div>
                            </UI.tabs.tab>
                            <UI.tabs.tab name="third">
                                <div style={{margin: '50px 0'}}>
                                    <label style={{color: '#2b5672', display: 'inline-block', fontSize: '14px', lineHeight: '18px', marginBottom: '3px', textAlign: 'left'}}>
                                        How many images to sync?
                                    </label>
                                    <UI.radioButtons
                                        wix-param="myRadioButtonsValue"
                                        defaultValue="3"
                                        onClickPreview={(newVal)=>console.log(newVal, 'clicked')}
                                        onMouseOverPreview={(newVal)=>console.log(newVal, 'over')}
                                        options={[
                                    { value: '1', label: 'Sync 10 images', className: 'firstOne'},
                                    { value: '2', label: 'Sync 25 images', className: 'differentOne'},
                                    { value: '3', label: 'Sync 50 images'}
                                ]}
                                        />
                                </div>
                                <div style={{margin: '50px 0'}}>
                                    <label style={{color: '#2b5672', display: 'inline-block', fontSize: '14px', lineHeight: '18px', marginBottom: '3px', textAlign: 'left'}}>
                                        Sync Meta Data?
                                    </label>
                                    <UI.toggleButtonsGroup
                                        defaultValue={[2]}
                                        onChange={(newVal)=>console.log(newVal)}
                                        options={[
                                    { value: 1, label: 'Image Meta', className: 'firstOne'},
                                    { value: 2, label: 'Image Alt', className: 'differentOne'},
                                    { value: 3, label: 'Image Link'}
                                ]}
                                        />
                                </div>
                            </UI.tabs.tab>
                        </UI.tabs.content>
                    </UI.tabs.holder>
                </div>
            );
        }
    });
});