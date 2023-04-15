const display = document.getElementById('display');
let displayData = '';
let operator;
let num1 = 0.00;

function btn1(){
    displayData += '1';
    display.innerHTML = displayData;  
}

function btn2(){
    displayData += '2';
    display.innerHTML = displayData;   
}

function btn3(){
    displayData += '3';
    display.innerHTML = displayData;  
}

function btn4(){
    displayData += '4';
    display.innerHTML = displayData; 
}

function btn5(){
    displayData += '5';
    display.innerHTML = displayData; 
}

function btn6(){
    displayData += '6';
    display.innerHTML = displayData;
}

function btn7(){
    displayData += '7';
    display.innerHTML = displayData; 
}

function btn8(){
    displayData += '8';
    display.innerHTML = displayData; 
}

function btn9(){
    displayData += '9';
    display.innerHTML = displayData;
}

function btn0(){
    if(display.innerHTML !== '0'){
        displayData += '0';
        display.innerHTML = displayData; 
    }    
}

function btnDecimal(){
    if(displayData === ''){
        displayData += '0.';
    }else{
        displayData += '.';
    }
    display.innerHTML = displayData;
}

function negative(){
    if(displayData.charAt(0) !== '-' && displayData !== ''){
        displayData = '-' + display.innerHTML;
        display.innerHTML = displayData;
    }else if(displayData.charAt(0) !== '-' && displayData === ''){
        displayData = '-';
        display.innerHTML = '-0';
    }
    else if(displayData === '-'){
        displayData = '';
        display.innerHTML = 0;
    }else{
        displayData = displayData.slice(1);
        display.innerHTML = displayData;
    }
}

function btnAC(){
    displayData = '';
    operator = null;
    display.innerHTML = '0';
    num1 = 0;
}

function plus(){
    operation();
    num1 = Number(display.innerHTML);
    operator = 'add';
    displayData = '';
}

function minus(){
    operation();
    num1 = Number(display.innerHTML);
    operator = 'minus';
    displayData = '';
}

function times(){
    operation();
    num1 = Number(display.innerHTML);
    operator = 'times';
    displayData = '';
}

function divide(){
    operation();
    num1 = Number(display.innerHTML);
    operator = 'divide';
    displayData = '';
}

function equals(){
    operation();
    displayData = '';
    operator = null;
}

function operation(){
    if(operator === 'add'){
        display.innerHTML = Number(display.innerHTML) + num1;
    }else if(operator === 'minus'){
        display.innerHTML = num1 - Number(display.innerHTML);
    }else if(operator === 'times'){
        display.innerHTML = num1 * Number(display.innerHTML);
    }else if(operator === 'divide'){
        display.innerHTML = num1 / Number(display.innerHTML);
    }
}