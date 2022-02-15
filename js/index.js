let screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        try {
            if (buttonText == "x") {
                screen.value += "*";
            } else if (buttonText == "C") {
                screen.value = "";
            } else if (buttonText == "D") {
                let str = screen.value;
                screen.value = str.slice(0, str.length - 1);
            } else if (buttonText == "%") {
                screen.value += "/";
            } else if (buttonText == "=") {
                screen.value = eval(screen.value);
            } else {
                screen.value += buttonText;
            };
        } catch (error) {
            window.alert('Something went wrong')
        }
    });
};