browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')
  console.log(request, sender, sendResponse)
  if (request.message === "getApiToken") {
    chrome.storage.sync.get(['key'], function (result) {
      console.log('Value currently is ' + result.key);
      sendResponse({message: result.key})
    });
  }
  // browser.tabs.executeScript({
  //   file: 'content-script.js',
  // });
})
