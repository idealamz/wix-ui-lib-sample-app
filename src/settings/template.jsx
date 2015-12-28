<UI.tabs.holder defaultTab="first" className="top" onChange="(newVal)=>console.log(newVal + ' selected')">
    <UI.tabs.header>
        <UI.tabs.label for="first" className="first">Tab 0</UI.tabs.label>
        <UI.tabs.label for="second" className="second">Tab 1</UI.tabs.label>
        <UI.tabs.label for="third" className="third">Tab 2</UI.tabs.label>
    </UI.tabs.header>
    <UI.tabs.content>
        <UI.tabs.tab name="first" className="tab">
            Tab content 0
        </UI.tabs.tab>
        <UI.tabs.tab name="second" className="tab">
            Tab content 1
        </UI.tabs.tab>
        <UI.tabs.tab name="third" className="tab">
            Tab content 3
        </UI.tabs.tab>
    </UI.tabs.content>
</UI.tabs.holder>