let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.addEventListener("onLoad", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: hideConsentPopup,
    });    
});

function hideConsentPopup() {
    const popup = document.getElementById('qc-cmp2-container');
    if (popup) { popup.remove();}
}