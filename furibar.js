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