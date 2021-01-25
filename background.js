// chrome.runtime.onInstalled.addListener(function () {
//     chrome.storage.sync.set({ color: '#3aa757' }, function () {
//         console.log('The color is green.');
//     });
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.msg === 'create-windows') {
        console.log(request)
        chrome.storage.sync.set({ tabs: request.tabs }, function () { });
        // add scroll listener
    } 
    else if (request.msg === 'scroll'){
        chrome.storage.sync.get(['tabs'], response => {
            for (let tab of response.tabs) {
                if (tab.id !== sender.tab.id) {
                    chrome.tabs.sendMessage(tab.id, {msg: 'scroll', scroll: request.scroll, maxScroll: request.maxScroll}, function(response) {});  
                }
            }
        });
    } 
    else if (request.msg === 'verse-enter' || request.msg === 'verse-leave'){
        chrome.storage.sync.get(['tabs'], response => {
            for (let tab of response.tabs) {
                if (tab.id !== sender.tab.id) {
                    chrome.tabs.sendMessage(tab.id, {msg: request.msg, id: request.id}, () => {});  
                }
            }
        });
    } 
    sendResponse('bob')
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.storage.sync.get(['tabs'], response => {
        if ('url' in changeInfo) {
            // change all tabs to the same url
            for (let tab of response.tabs) {
                if (tab.id !== tabId) {
                    let lang;
                    if (tab.url) {
                        lang = tab.url.match(/lang=\w+/)[0]
                    } else {
                        lang = tab.pendingUrl.match(/lang=\w+/)[0]
                    }
                    let new_url = changeInfo.url.replace(/lang=\w+/, lang)
                    chrome.tabs.update(tab.id, { url: new_url }, () => { } )
                }
            }
        }
    });

});

let scrollAll = () => {
}