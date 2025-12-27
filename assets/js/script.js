const button = document.getElementById('switch');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');
const a = document.getElementsByTagName('a')[0];
const darkModeClass = 'dark-mode';

button.addEventListener('click', changeMode);

function changeMode() {
    changeClasses();
    changeText();

}

function changeClasses() {
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    a.classList.toggle(darkModeClass);
}

function changeText () {
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
    } else {
        button.innerHTML = "Dark Mode";
        h1.innerHTML = "Light Mode ON";
    }   

    return; 
}




