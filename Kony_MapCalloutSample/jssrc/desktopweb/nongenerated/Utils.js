function customLocationData2() {
    alert("4");
    frmiPhoneMap.map1591284994232833.calloutTemplate = hbox1590152936135720;
    frmiPhoneMap.map1591284994232833.calloutWidth = 80;
    frmiPhoneMap.map1591284994232833.widgetDataMapForCallout = {
        lbl1: "data1",
        lbl2: "data2",
        img1: "img1",
        img2: "img2"
    };
    clData = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        image: "a.png",
        showCallout: true,
        calloutData: {
            data1: "KonyLabs(new)",
            data2: "Phoenix infocity, Gachibowli",
            img1: "close.png",
            img2: "favorite_active.png",
            template: hbox1590152936135720
        }
    }, {
        lat: "17.41839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions, Madhapur",
        image: "b.png",
        showCallout: true,
        calloutData: {
            data1: "KonyLabs(old)",
            data2: "Kony Solutions, Madhapur",
            img1: "close.png",
            img2: "favorite_active.png",
            template: hbox1590152936135720
        }
    }, {
        lat: "17.547326",
        lon: "78.471358",
        name: "KonyLabs(new1)",
        desc: "Phoenix infocity, Gachibowli1",
        image: "a.png",
        showCallout: true,
        calloutData: {
            data1: "KonyLabs(new1)",
            data2: "Phoenix infocity, Gachibowli1",
            img1: "close.png",
            img2: "favorite_active.png",
            template: hbox1590152936135720
        }
    }, {
        lat: "17.541839",
        lon: "78.480928",
        name: "KonyLabs(old1)",
        desc: "Kony Solutions, Madhapur1",
        image: "b.png",
        showCallout: true,
        calloutData: {
            data1: "KonyLabs(old1)",
            data2: "Kony Solutions, Madhapur1",
            img1: "close.png",
            img2: "favorite_active.png",
            template: hbox1590152936135720
        }
    }, {
        lat: "17.647326",
        lon: "78.571358",
        name: "KonyLabs(new2)",
        desc: "Phoenix infocity, Gachibowli2",
        image: "a.png",
        showCallout: true,
        calloutData: {
            data1: "KonyLabs(new2)",
            data2: "Phoenix infocity, Gachibowli2",
            img1: "close.png",
            img2: "favorite_active.png",
            template: hbox1590152936135720
        }
    }, {
        lat: "17.641839",
        lon: "78.580928",
        name: "KonyLabs(old2)",
        desc: "Kony Solutions, Madhapur2",
        image: "b.png",
        showCallout: true,
        calloutData: {
            data1: "KonyLabs(old2)",
            data2: "Kony Solutions, Madhapur2",
            img1: "close.png",
            img2: "favorite_active.png",
            template: hbox1590152936135720
        }
    }];
    frmiPhoneMap.map1591284994232833.locationData = clData;
}

function onPinSelect(mapwidget, locationdata) {
    alert("1");
    //var pinData=JSON.stringify(locationdata);
    //kony.print("PinData:"+pinData);	
    //kony.print("Latitude:"+JSON.stringify(locationdata.lat));
    //kony.print("Longitude:"+JSON.stringify(locationdata.lon));
    //kony.print("Latitude:"+JSON.stringify(locationdata.name));
    //kony.print("Longitude:"+JSON.stringify(locationdata.desc));
    gblLat = JSON.stringify(locationdata.lat);
    gblLon = JSON.stringify(locationdata.lon);
    gblName = JSON.stringify(locationdata.name);
    gblDesc = JSON.stringify(locationdata.desc);
    var locationDetails = new Array();
    locationDetails[0] = "lat";
    locationDetails[1] = "lon";
    locationDetails[2] = "name";
    locationDetails[3] = "desc"
    var jsonText = JSON.stringify(locationdata, locationDetails, "\t");
    kony.print("New Location:" + jsonText);
}

function customOnClickEvent() {
    alert("2");
    frmLocationDetails.label126672603136016.text = gblLat;
    frmLocationDetails.label126672603136070.text = gblLon;
    frmLocationDetails.label126672603136088.text = gblName;
    frmLocationDetails.label126672603136106.text = gblDesc;
    frmLocationDetails.show();
}

function onSelectionMap(mapwidget, locationdata) {
    alert("3");
    var gblLat = JSON.stringify(locationdata.lat);
    gblLon = JSON.stringify(locationdata.lon);
    var gblName = JSON.stringify(locationdata.name);
    var gblDesc = JSON.stringify(locationdata.desc);
    kony.print("Location details:" + gblLat + gblLon + gblName + gblDesc);
    frmLocationDetails.label126672603136016.text = gblLat;
    frmLocationDetails.label126672603136070.text = gblLon;
    frmLocationDetails.label126672603136088.text = gblName;
    frmLocationDetails.label126672603136106.text = gblDesc;
    frmLocationDetails.show();
}