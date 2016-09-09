//Form JS File
function frmiPhoneMap_frmiPhoneMap_preshow_seq0(eventobject, neworientation) {
    customLocationData2.call(this);
};

function frmiPhoneMap_map1591284994232833_onSelection_seq0(eventobject, location) {
    onSelectionMap.call(this, eventobject, location);
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
        "onSelection": frmiPhoneMap_map1591284994232833_onSelection_seq0
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "mapSource": constants.MAP_SOURCE_NON_NATIVE
    });
    frmiPhoneMap.add(
    map1591284994232833);
};

function frmiPhoneMapGlobals() {
    var MenuId = [];
    frmiPhoneMap = new kony.ui.Form2({
        "id": "frmiPhoneMap",
        "title": null,
        "needAppMenu": true,
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