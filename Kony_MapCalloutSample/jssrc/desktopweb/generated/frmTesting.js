//Form JS File
function frmTesting_btnBack_onClick_seq0(eventobject) {
    frmiPhoneMap.show();
};

function addWidgetsfrmTesting() {
    var btnBack = new kony.ui.Button({
        "id": "btnBack",
        "isVisible": true,
        "text": "Button back",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTesting_btnBack_onClick_seq0
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
        "containerWeight": 11,
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
    btnBack);
    frmTesting.add(
    hbox4099170171265611);
};

function frmTestingGlobals() {
    var MenuId = [];
    frmTesting = new kony.ui.Form2({
        "id": "frmTesting",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTesting
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