document.addEventListener('DOMContentLoaded', (event) => {
    let inputfield = document.getElementById('inputfield');
    let buttons = document.querySelectorAll('button');

    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerHTML;
            
            if (buttonText == "=") {
                try {
                    string = eval(string);
                    inputfield.value = string;
                } catch (error) {
                    inputfield.value = "Error";
                    string = "";
                }
            } else if (buttonText == "AC") {
                string = "";
                inputfield.value = string;
            } else if (buttonText == "DEL") {
                string = string.slice(0, -1);
                inputfield.value = string;
            } else {
                string += buttonText;
                inputfield.value = string;
            }
        });
    });
});
