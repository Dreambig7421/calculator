
//variables
const display = document.querySelector ('.display');
const buttons = document.querySelectorAll ('button');
specialChr = ["%", "/", "*", "+", "-", "="];
let output = "";


//function to calculate on clicked based.
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        //if btn value equals to "%" replace with "/100".
        output = eval(output.replace("%", "/100" ));
    }
    else if (btnValue === "AC") {
        //if clicked on DEL button delete the last character.
        output = "";
    }
    else if (btnValue === "DEL") {
        //if clicked on DEL button delete the last character.
        output = output.toString().slice(0,-1);
    }
    else {
        if (output === "" && specialChr.includes(btnValue)) return;
        output += btnValue;
        }
        
    display.value = output;
    }
    

//add event listners, calculation on click.
buttons.forEach((button) => {
    button.addEventListener ("click", (e) => calculate(e.target.dataset.value));
});
