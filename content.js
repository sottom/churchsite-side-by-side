var scrollFromBackground = false;



setTimeout(() => {
    let flexContainer = document.querySelector('#flexContainer');
    let maxScroll = getWindowMaxScroll()
    let flexScroll = getFlexContainerMaxScroll()
    if(maxScroll === 0){ maxScroll = flexScroll }
    let verses = document.querySelectorAll('p[id^="p"]');

    verses.forEach(verse => {
        verse.addEventListener('mouseenter', e => {
            // verse.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'center'
            // })
            e.target.style.backgroundColor = "yellow";
            chrome.runtime.sendMessage({ msg: 'verse-enter', id: e.target.id }, function (response) { });
        })
        verse.addEventListener('mouseleave', e => {
            e.target.style.backgroundColor = "";
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
                verse.style.backgroundColor = "";
                if(verse.id === request.id){
                    verse.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })
                    verse.style.backgroundColor = "yellow";
                    continue;
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