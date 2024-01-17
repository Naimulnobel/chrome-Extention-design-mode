let extensionEnabled = false; // Initialize the variable

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'toggleExtension') {
        extensionEnabled = !extensionEnabled;

        // Send a message to the content script to toggle the designMode
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleDesignMode" });
        });

        // Check if chrome.storage is available
        if (chrome.storage) {
            chrome.storage.sync.set({ 'enabled': extensionEnabled }, function () {
                sendResponse({ enabled: extensionEnabled });
            });
        } else {
            console.error('chrome.storage is not available.');
            sendResponse({ enabled: extensionEnabled });
        }
    } else if (request.action === 'getState') {
        sendResponse({ enabled: extensionEnabled });
    }
});