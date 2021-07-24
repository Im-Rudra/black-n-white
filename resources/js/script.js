const btn = document.querySelector('.btn-dark');
const body = document.querySelector('body');
const stateHeading = document.querySelector('.content h1');

btn.addEventListener('click', () => {
    let colorState;
    let btnState;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        btnState = 'Light';
        colorState = 'Dark';
        btn.innerHTML = `Switch to ${btnState}`;
        stateHeading.innerHTML = `${colorState} Mode`;

    } else if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        btnState = 'Dark';
        colorState = 'Light';
        btn.innerHTML = `Switch to ${btnState}`;
        stateHeading.innerHTML = `${colorState} Mode`;

    }
})

