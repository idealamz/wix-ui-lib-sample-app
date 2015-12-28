define(['react', 'lodash', 'UI'], function (React, _, UI) {
    return React.createClass({
        displayName: 'template',
        render: function () {
            return (
                <div>
                    <UI.button
                        label="button"
                        onClick={()=>alert('Hello')}
                        className="btn-primary"
                        />

                    <UI.dropDownSelect
                        label="Drop Down Select"
                        defaultValue="1"
                        wix-param="drop_down_select"
                        onChange={(newVal)=>this.props.settingsUpdate({'drop_down_select': newVal})}
                        options="{[
            { value: '1', label: 'One'},
            { value: '2', label: 'Two'},
            { value: '3', label: 'Three'}
        ]}"
                        infoTitle="Info Title"
                        infoText="Info Text"
                        />

                    <UI.dock
                        label="Dock"
                        defaultValue="TOP_RIGHT"
                        onChange={(newVal)=>this.props.settingsUpdate({'dock': newVal})}
                        />

                    <UI.textInput
                        label="Text Input"
                        wix-param="text_input"
                        validator={function(val) {return val.length < 15}}
                        placeholder="placeholder text"
                        infoText="Knowledge is power, this is just a text info"
                        invalidMessage="Invalid Input."
                        focus={false}
                        onChange={(newVal)=>this.props.settingsUpdate({'textInput': newVal})}
                        />

                    <UI.languagePicker
                        label="Language Picker"
                        onChange={(newVal)=>this.props.settingsUpdate({'language_picker': newVal})}
                        infoTitle="info title"
                        infoText="info text"
                        />
                </div>
            )
        }
    });
});