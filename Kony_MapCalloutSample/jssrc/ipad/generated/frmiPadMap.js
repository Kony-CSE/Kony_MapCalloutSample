//Form JS File
function frmiPadMap_frmiPadMap_preshow_seq0(eventobject, neworientation) {
    customLocationData3.call(this);
};

function addWidgetsfrmiPadMap() {
    var map1591284994232833 = new kony.ui.Map({
        "id": "map1591284994232833",
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": true,
        "calloutWidth": 80
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 14
    });
    frmiPadMap.add(
    map1591284994232833);
};

function frmiPadMapGlobals() {
    var MenuId = [];
    frmiPadMap = new kony.ui.Form2({
        "id": "frmiPadMap",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmiPadMap_frmiPadMap_preshow_seq0,
        "addWidgets": addWidgetsfrmiPadMap
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};