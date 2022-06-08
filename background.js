chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.msg === 'get-langs') {
        console.log(1)
        chrome.storage.sync.set({ langs: request.langs }, function () { });
        console.log(2)
        const htmls = [];
        console.log(3)
        for (let url of request.langs) {
            const html = await (await fetch(url)).text()
        console.log(4)
            let match = html.match(/<section id="*content"*[\s\S]+<\/section>/);
        console.log(5)
            htmls.push(match[0])
        console.log(6)
        }
        console.log(7)
        let tabs = await chrome.tabs.query({ 
            active: true, 
            currentWindow: true,
        });
        console.log(8)
        chrome.runtime.sendMessage(tabs[0].id, { msg: 'langs', langs: htmls })
    }
    else if (request.msg === 'create-windows') {
        chrome.storage.sync.set({ tabs: request.tabs }, function () { });
        let tabs = await chrome.tabs.query({ 
            active: true, 
            currentWindow: true,
        });
        tabs[0].id
        console.log(chrome.storage.sync.get(['tabs']))
    }
    else if (request.msg === 'scroll') {
        chrome.storage.sync.get(['tabs'], response => {
            for (let tab of response.tabs) {
                if (tab.id !== sender.tab.id) {
                    chrome.tabs.sendMessage(tab.id, { msg: 'scroll', scroll: request.scroll, maxScroll: request.maxScroll }, function (response) { });
                }
            }
        });
    }
    else if (request.msg === 'verse-enter' || request.msg === 'verse-leave') {
        chrome.storage.sync.get(['tabs'], response => {
            for (let tab of response.tabs) {
                if (tab.id !== sender.tab.id) {
                    chrome.tabs.sendMessage(tab.id, { msg: request.msg, id: request.id }, () => { });
                }
            }
        });
    }
    sendResponse('bob')
})

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    // remove all tabs when one is removed
    chrome.storage.sync.get(['tabs'], response => {
        for (let tab of response.tabs) {
            if (tabId === tab.id) continue;
            chrome.tabs.remove(tab.id);
        }
    });
});



// change all urls to match
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!changeInfo.url) return;
    chrome.storage.sync.get(['lastUrl', 'tabs', 'updating'], ({ lastUrl, tabs, updating }) => {
        if (updating) return;
        let mainUrl = changeInfo.url.match(/.+(churchofjesuschrist.+)\?/)[1]
        if (mainUrl === lastUrl || checkForFunnyURL(mainUrl)) return;
        chrome.storage.sync.set({ lastUrl: mainUrl, updating: true }, function () { });
        // change all tabs to the same url
        for (let tab of tabs) {
            if (tab.id === tabId) continue;
            let lang;
            if (tab.url) {
                lang = tab.url.match(/lang=\w+/)[0]
            } else {
                lang = tab.pendingUrl.match(/lang=\w+/)[0]
            }
            let new_url = changeInfo.url.replace(/lang=\w+/, lang)
            console.log('-->', new_url);
            chrome.tabs.update(tab.id, { url: new_url }, () => { })
        }
        chrome.storage.sync.set({ updating: false }, function () { });
    });
});

// the english version has a page for BOM that Japanese doesn't have
function checkForFunnyURL(mainUrl) {
    const funny_redirects = ['1-ne', '2-ne', 'jacob', 'mosiah', 'alma', 'hel', '3-ne', 'morm', 'ether', 'moro']
    return funny_redirects.some(book => {
        return mainUrl.match(new RegExp(`${book}$`)) ? true : false;
    });
}