//startup.js file
var appConfig = {
    appId: "MapCustomCallout",
    appName: "MapCustomCallout",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.49",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    url: "http://10.10.12.49:80/middleware/MWServlet",
    secureurl: "https://10.10.12.49:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeuserCallout();
    frmiPhoneMapGlobals();
    frmLocationDetailsGlobals();
    frmTestingGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmiPhoneMap.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};