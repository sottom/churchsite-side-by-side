// -----------------------------------------------------------
// To read normal with furibar
// -----------------------------------------------------------
// Add this code in the console to add a horizontal line across 
// the screen that hides or shows furigana depending on which 
// side of the line your japanese text is on.

// top to bottom
let distance = screen.height / 5;

let ps = document.querySelectorAll('p[id^="p"]')
document.querySelector('#flexContainer').onscroll = e => {
    ps.forEach(p => {
        let rts = p.querySelectorAll('rt');
        let display = p.getBoundingClientRect().top < distance
            ? 'block'
            : 'none'
        rts.forEach(rt => rt.style.display = display)
    });
};

let furibar = document.createElement('div')
furibar.style.position = 'fixed';
furibar.style.height = '8px';
furibar.style.backgroundColor = 'limegreen';
furibar.style.left = '0px';
furibar.style.opacity = '0.6';
furibar.style.width = '100%';
furibar.style.top = distance + 'px';
document.body.appendChild(furibar)

let spacer = document.createElement('div');
spacer.style.height = "500px";
ps[0].parentElement.appendChild(spacer);



// -----------------------------------------------------------
// To read top to bottom, right to left with furibar
// -----------------------------------------------------------
// Add this code in the console to flip the japanese text reading
// from top to bottom, right to left. It also adds a line across 
// the screen vertically that hides or shows furigana depending on 
// which side of the line your japanese text is on.

// To read japanese top to bottom right to left
// inject this css
// .ttbrtl {
//     -webkit-writing-mode: vertical-rl;
//     -moz-writing-mode: vertical-rl;
//     -ms-writing-mode: vertical-rl;
//     writing-mode: vertical-rl;
//     overflow-x: 'scroll'
//   }
// add class to ""

let body = document.querySelector("article .body")
body.style.maxWidth = window.innerWidth - 150 + 'px'
body.style.overflowX = "scroll"
body.style.writingMode = "vertical-rl"

// right to left
let distance = screen.width / 4;

let ps = document.querySelectorAll('p[id^="p"]')
document.querySelector('article .body').onscroll = e => {
    ps.forEach(p => {
        let rts = p.querySelectorAll('rt');
        let display = p.getBoundingClientRect().right > distance
            ? 'block'
            : 'none'
        rts.forEach(rt => rt.style.display = display)
    });
};

let furibar = document.createElement('div')
furibar.style.position = 'fixed';
furibar.style.width = '8px';
furibar.style.backgroundColor = 'limegreen';
furibar.style.top = '0px';
furibar.style.opacity = '0.6';
furibar.style.height = '10000px';
furibar.style.left = distance + 'px';
document.body.appendChild(furibar)

let spacer = document.createElement('div');
spacer.style.width = "500px";
ps[0].parentElement.appendChild(spacer);

