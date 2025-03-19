let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

const setUserName = () => {
    const myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent =  `Mozila is cool, ${storedName}`;
}

myButton.addEventListener('click', () => {
    setUserName();
});
