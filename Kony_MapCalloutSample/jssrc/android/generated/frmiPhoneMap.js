//Form JS File
function frmiPhoneMap_frmiPhoneMap_preshow_seq0(eventobject, neworientation) {
    customLocationData2.call(this);
};

function frmiPhoneMap_map1591284994232833_onPinClick_seq0(eventobject, location) {
    onPinSelect.call(this, eventobject, location);
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
        "containerWeight": 100
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 15
    });
    frmiPhoneMap.add(
    map1591284994232833);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};