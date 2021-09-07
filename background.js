//chrome.storage.sync.get('key', callbackfunction()) 
chrome.storage.sync.get('defaultnewtab', storage => { 
    if (storage.defaultnewtab) { 
        chrome.tabs.update({ url: 'chrome-search://local-ntp/local-ntp.html' });
     } 
    });


    