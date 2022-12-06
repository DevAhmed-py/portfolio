let themes = document.getElementsByClassName('theme')

console.log('hey');

for (let i=0; i < themes.length; i++) {
    themes[i].addEventListener('click', () => {
        let mode = themes.dataset.mode
        console.log('clicked', mode)
        setTheme(mode)
    })   
}

const setTheme = (mode) => {
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
}