let themes = document.getElementsByClassName('theme')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('blue')
} else {
    setTheme(theme)
}

for (let i=0; i < themes.length; i++) {
    themes[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode)
    })   
}

function setTheme(mode) {
    if (mode === "light") {
        document.getElementById('theme-styles').href="./styles/index.css"
    }

    if (mode === "purple") {
        document.getElementById('theme-styles').href="./styles/purple.css"
    }

    if (mode === "green") {
        document.getElementById('theme-styles').href="./styles/green.css"
    }

    if (mode === "blue") {
        document.getElementById('theme-styles').href="./styles/blue.css"
    }

    localStorage.setItem('theme', mode)
}

const copyright = document.getElementById('copyright')
let year = new Date().getFullYear();
copyright.textContent = `copyright © ${year}`