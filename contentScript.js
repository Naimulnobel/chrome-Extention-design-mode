chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "toggleDesignMode") {
        if (document.designMode === "off") {
            document.designMode = "on";
        } else {
            document.designMode = "off";
        }
    }
});