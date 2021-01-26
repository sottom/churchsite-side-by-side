var scrollFromBackground = false;


// TODO: verses isn't being found (it seems like the page doesn't reload - console statements aren't reloaded. I'm going to have to get the verses again after getting to the verses page)

setTimeout(() => {
    let flexContainer = document.querySelector('#flexContainer');
    let maxScroll = getWindowMaxScroll()
    let flexScroll = getFlexContainerMaxScroll()
    if(maxScroll === 0){ maxScroll = flexScroll }
    let verses = document.querySelectorAll('p[id^="p"]');

    verses.forEach(p => {
        p.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = "yellow";
            chrome.runtime.sendMessage({ msg: 'verse-enter', id: e.target.id }, function (response) { });
        })
        p.addEventListener('mouseleave', e => {
            e.target.style.backgroundColor = "";
            chrome.runtime.sendMessage({ msg: 'verse-leave', id: e.target.id }, function (response) { });
        })
    })

    // flexContainer.addEventListener('scroll', e => {
    //     if (scrollFromBackground) {
    //         scrollFromBackground = false;
    //         return;
    //     }
    //     chrome.runtime.sendMessage({ msg: 'scroll', scroll: flexContainer.scrollTop, maxScroll  }, function (response) { });
    // });

    window.addEventListener('scroll', e => {
        if (scrollFromBackground) {
            scrollFromBackground = false;
            return;
        }
        chrome.runtime.sendMessage({ msg: 'scroll', scroll: window.scrollY, maxScroll }, function (response) { });
    })


    chrome.runtime.onMessage.addListener(request => {
        console.log(request)
        let ratio = maxScroll /request.maxScroll
        if (request.msg === 'scroll') {
            scrollFromBackground = true;
            // TODO: do scrolling by paragraph, not by ratios (highlight the to paragraph in the dom as you're scrolling)
            // flexContainer.scrollTo(0, request.scroll)
            window.scrollTo(0, request.scroll)
        }
        else if (request.msg === 'verse-enter'){
            for(let verse of verses){
                if(verse.id === request.id){
                    verse.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })
                    verse.style.backgroundColor = "yellow";
                    break;
                }
            }
        }
        else if (request.msg === 'verse-leave'){
            for(let verse of verses){
                if(verse.id === request.id){
                    verse.style.backgroundColor = "";
                    break;
                }
            }
        }
    })
}, 10)

let getFlexContainerMaxScroll = () => {
    return flexContainer.scrollHeight - window.innerHeight
}

let getWindowMaxScroll = () => {
    return document.body.clientHeight - window.innerHeight
}