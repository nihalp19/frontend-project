function show(x) {

    if (x == 1) {
        for (let i = 1; i <= x; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'yellow'

            document.getElementById('demo').innerHTML = '&#x1F604';
        }
        for (let i = x + 1; x <= 5; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'transparent'
            document.getElementById('demo').innerHTML = '&#x1F604';
        }
    }
    if (x == 2) {
        for (let i = 1; i <= x; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'yellow'
            document.getElementById('demo').innerHTML = '&#128512';
        }
        for (let i = x + 1; x <= 5; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'transparent'
            document.getElementById('demo').innerHTML = '&#128512';
        }
    }
    if (x == 3) {
        for (let i = 1; i <= x; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'yellow'
            document.getElementById('demo').innerHTML = '&#128516';
        }
        for (let i = x + 1; x <= 5; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'transparent'
            document.getElementById('demo').innerHTML = '&#128516';
        }
    }
    if (x == 4) {
        for (let i = 1; i <= x; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'yellow'
            document.getElementById('demo').innerHTML = '&#128525';
        }
        for (let i = x + 1; x <= 5; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'transparent'
            document.getElementById('demo').innerHTML = '&#128525';
        }
    }
    if (x == 5) {
        for (let i = 1; i <= x; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'yellow'
            document.getElementById('demo').innerHTML = '&#128151';
        }
        for (let i = x + 1; x <= 5; i++) {
            let star = document.querySelector('ul li:nth-child(' + i + ')')
            star.style.backgroundColor = 'transparent'
            document.getElementById('demo').innerHTML = '&#128151';
        }
    }
}