let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

const setUserName = () => {
    const myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = `I love Coding, Welcome: ${myName}`;
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent =  `I love Coding, Welcome: ${storedName}`;
}

myButton.addEventListener('click', () => {
    setUserName();
});
