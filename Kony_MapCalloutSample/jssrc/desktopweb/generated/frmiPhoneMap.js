//Form JS File
function frmiPhoneMap_frmiPhoneMap_preshow_seq0(eventobject, neworientation) {
    customLocationData2.call(this);
};

function frmiPhoneMap_map1591284994232833_onPinClick_seq0(eventobject, location) {
    onPinSelect.call(this, eventobject, location);
};

function frmiPhoneMap_btnNextPage_onClick_seq0(eventobject) {
    alert("1");
    frmiPhoneMap.map1591284994232833.dismissCallout(frmiPhoneMap.map1591284994232833.locationData);
    frmTesting.show();
    alert("2");
};

function addWidgetsfrmiPhoneMap() {
    var map1591284994232833 = new kony.ui.Map({
        "id": "map1591284994232833",
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": true,
        "calloutWidth": 80,
        "onPinClick": frmiPhoneMap_map1591284994232833_onPinClick_seq0
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 77
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "mapSource": constants.MAP_SOURCE_NON_NATIVE
    });
    var btnNextPage = new kony.ui.Button({
        "id": "btnNextPage",
        "isVisible": true,
        "text": "btnNextPage",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmiPhoneMap_btnNextPage_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "toolTip": null
    });
    var hbox4099170171265611 = new kony.ui.Box({
        "id": "hbox4099170171265611",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox4099170171265611.add(
    btnNextPage);
    frmiPhoneMap.add(
    map1591284994232833, hbox4099170171265611);
};

function frmiPhoneMapGlobals() {
    var MenuId = [];
    frmiPhoneMap = new kony.ui.Form2({
        "id": "frmiPhoneMap",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmiPhoneMap_frmiPhoneMap_preshow_seq0,
        "addWidgets": addWidgetsfrmiPhoneMap
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};