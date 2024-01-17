document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');

    // Get the initial state of the extension
    chrome.runtime.sendMessage({ action: 'getState' }, function (response) {
        updateButtonText(response.enabled);
    });

    toggleButton.addEventListener('click', function () {
        chrome.runtime.sendMessage({ action: 'toggleExtension' }, function (response) {
            updateButtonText(response.enabled);
        });
    });
});

function updateButtonText(enabled) {
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.textContent = enabled ? 'Disable Extension' : 'Enable Extension';
}
