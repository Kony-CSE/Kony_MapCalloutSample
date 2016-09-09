//Form JS File
function frmMap_frmMap_preshow_seq0(eventobject, neworientation) {
    customLocationData.call(this);
};

function frmMap_map1590152936135706_onSelection_seq0(eventobject, location) {
    alert("Map onselection fired");
};

function frmMap_map1590152936135706_onPinClick_seq0(eventobject, location) {
    onPinSelect.call(this, eventobject, location);
};

function addWidgetsfrmMap() {
    var map1590152936135706 = new kony.ui.Map({
        "id": "map1590152936135706",
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": false,
        "calloutWidth": 80,
        "onSelection": frmMap_map1590152936135706_onSelection_seq0,
        "onPinClick": frmMap_map1590152936135706_onPinClick_seq0
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
    var hbox1590152936135705 = new kony.ui.Box({
        "id": "hbox1590152936135705",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 54,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [5, 2, 5, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1590152936135705.add(
    map1590152936135706);
    var label1590152936135730 = new kony.ui.Label({
        "id": "label1590152936135730",
        "isVisible": true,
        "text": "Lable One Below the Map Widget",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var label1590152936135731 = new kony.ui.Label({
        "id": "label1590152936135731",
        "isVisible": true,
        "text": "Lable Two below the Map Widget",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var button1590152936135732 = new kony.ui.Button({
        "id": "button1590152936135732",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmMap.add(
    hbox1590152936135705, label1590152936135730, label1590152936135731, button1590152936135732);
};

function frmMapGlobals() {
    var MenuId = [];
    frmMap = new kony.ui.Form2({
        "id": "frmMap",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmMap_frmMap_preshow_seq0,
        "addWidgets": addWidgetsfrmMap
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