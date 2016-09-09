//Form JS File
function frmiPhoneMap_frmiPhoneMap_preshow_seq0(eventobject, neworientation) {
    customLocationData2.call(this);
};

function frmiPhoneMap_map1591284994232833_onPinClick_seq0(eventobject, location) {
    onPinSelect.call(this, eventobject, location);
};

function addWidgetsfrmiPhoneMap() {
    var map1591284994232833 = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": null,
        "id": "map1591284994232833",
        "isVisible": true,
        "mapKey": null,
        "onPinClick": frmiPhoneMap_map1591284994232833_onPinClick_seq0,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "screenLevelWidget": true
    }, {
        "containerHeight": null,
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "zoomLevel": 14
    });
    frmiPhoneMap.add(
    map1591284994232833);
};

function frmiPhoneMapGlobals() {
    var MenuId = [];
    frmiPhoneMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmiPhoneMap,
        "enabledForIdleTimeout": false,
        "id": "frmiPhoneMap",
        "needAppMenu": true,
        "preShow": frmiPhoneMap_frmiPhoneMap_preshow_seq0,
        "skin": "frm",
        "title": null
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
};