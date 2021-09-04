const btn = document.querySelector('.btn-dark');
const body = document.querySelector('body');
const modeTitle = document.querySelector('.content h1');
//  controls the toggle btn
let btnMode = localStorage.colorMode === 'dark' ? 'light' : 'dark';

const toColor = (firstColor, secondColor) => {  // toColor means firstColor to secondColor
    body.classList.remove(firstColor);
    body.classList.add(secondColor);
    // first letter capital
    btn.innerText = `Switch to ${firstColor[0].toUpperCase() + firstColor.slice(1)}`;
    // first letter capital
    modeTitle.innerText = `${secondColor[0].toUpperCase() + secondColor.slice(1)} Mode`;
    localStorage.colorMode = secondColor;
    btnMode = firstColor;
}
const changeColorState = (colorMode) => {
    if (colorMode === 'dark') {
        toColor('light', 'dark');  // light to dark
    }
    else {
        toColor('dark', 'light');  // dark to light
    }
}
changeColorState(localStorage.colorMode);  // controls the user's pre used color mode

btn.addEventListener('click', () => {
    changeColorState(btnMode);
});