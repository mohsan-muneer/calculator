let display = document.getElementById('display');
let button = Array.from(document.getElementsByClassName('button'))
button.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)

                }
                catch {
                    // if you get error and you want to open any site on different page use below code
                    // window.open(
                    //     'https://www.google.com/', '_blank'
                    // );
                    // window.location.replace('https://www.google.com/ ');
                    display.innerText = 'Error!Kindly write valid numbers';
                }
                break;
            default:

                display.innerText += e.target.innerText;
        }
    });
});
// const button = document.getElementById("button")
// button.addEventListener("click", () => {
//     console.log('my name is mohsan muneer and registration num is 18')
// });