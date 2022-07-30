const result = document.getElementById('result');
const upperRes = document.getElementById('upper-display');
const dott = document.getElementById('dot');
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const clear = document.getElementById('clear');
const plus = document.getElementById('plus');
const division = document.getElementById('divide');
const multiplication = document.getElementById('multiply');
const subtraction = document.getElementById('subtract');
const ampher = document.getElementById('amphercent');
let equals = document.getElementById('equals');
let compute = [];
let addFlag = 0;
let subtractFlag = 0;
let multiplyFlag = 0;
let divideFlag = 0;
let sub2 = 0;
let mul2 = 0;
let div2 = 0;



function add(firstNum,secondNum)
{
    return parseFloat(firstNum) + parseFloat(secondNum);
}

function subtract(firstNum,secondNum)
{
    return parseFloat(firstNum) - parseFloat(secondNum);
}

function multiply(firstNum,secondNum)
{
    return parseFloat(firstNum) * parseFloat(secondNum);
}

function divide(firstNum,secondNum)
{
    return parseFloat(firstNum)/parseFloat(secondNum);
}

function operate(firstNum,operator,secondNum)
{
    if(operator == add)
    {
        return add(firstNum,secondNum);
    }
    else if(operator == subtract)
    {
        return subtract(firstNum,secondNum);
    }
    else if(operator == multiply)
    {
        return multiply(firstNum,secondNum);
    }
    else if(operator == divide)
    {
        return divide(firstNum,secondNum);
    }
}


let variable = "";


clear.addEventListener('click', ()=>{ variable = 0; result.textContent = 0; compute = [];
    upperRes.textContent = result.textContent;});

zero.addEventListener('click', () =>{
    let temp = variable + 0;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

one.addEventListener('click', () =>{
    let temp = variable + 1;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

two.addEventListener('click', () =>{
    let temp = variable + 2;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

three.addEventListener('click', () =>{
    let temp = variable + 3;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

four.addEventListener('click', () =>{
    let temp = variable + 4;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

five.addEventListener('click', () =>{
    let temp = variable + 5;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

six.addEventListener('click', () =>{
    let temp = variable + 6;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

seven.addEventListener('click', () =>{
    let temp = variable + 7;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

eight.addEventListener('click',()=>{
    let temp = variable + 8;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

nine.addEventListener('click',()=>{
    let temp = variable + 9;
    result.textContent = temp;
    variable = result.textContent;
    console.log(variable);
});

let dotCount = 0;
dott.addEventListener('click',()=>{
    dotCount++;
    if(dotCount<2)
    {
        let temp = variable + ".";
        result.textContent = temp;
        variable = result.textContent;
        console.log(variable);
    }
});

ampher.addEventListener('click',() =>{
    let temp = variable;
    result.textContent = temp/100;
    variable = result.textContent;

})

plus.addEventListener('click', () =>{
   
    if(subtractFlag != 0) sub2++;
    if(multiplyFlag!=0) mul2++;
    if(divideFlag!=0) div2++;
    addFlag++;
    console.log(compute);
    let num = variable;
    if(num == "")
    {
        num = compute[0];
        console.log(compute);
    }
    else
    {
        compute.push(num);
        variable = "";
        getResult();
        console.log(compute);
        console.log(addFlag);
    }
    upperRes.textContent = result.textContent;
});

division.addEventListener('click', () =>{
   
    if(subtractFlag != 0) sub2++;
    if(multiplyFlag!=0) mul2++;
    divideFlag++;
    console.log(compute);
    let num = variable;
    if(num == "")
    {
        num = compute[0];
        console.log(compute);
    }
    else
    {
        compute.push(num);
        variable = "";
        getResult();
        console.log(compute);
        console.log(divideFlag);
    }
    upperRes.textContent = result.textContent;
});

subtraction.addEventListener('click',() =>{
    if(multiplyFlag!=0) mul2++;
    if(divideFlag!=0) div2++;
    subtractFlag++;
    let num = variable;
    if(num == "")
    {
        num = compute[0];
        console.log(compute);
    }
    else
    {
        compute.push(num);
        console.log(compute);
        variable = "";
        getResult();
        console.log(compute);
    }
    upperRes.textContent = result.textContent;
});

multiplication.addEventListener('click',() =>{
    
    multiplyFlag++;
    if(divideFlag!=0) div2++;
    let num = variable;
    if(num == "")
    {
        num = compute[0];
        console.log(compute);
    }
    else
    {
        compute.push(num);
        console.log(compute);
        variable = "";
        getResult();
        console.log(compute);
    }
    upperRes.textContent = result.textContent;
});

equals.addEventListener('click',() => {
    if(compute.length == 0)
    {result.textContent = "0";}
    else
    {
        let num2 = variable;
        if(num2 == "")
        {
            num2 = compute[0];
            console.log(compute);
        }
        else{
        compute.push(num2);
        console.log(compute);
        getResult();
        console.log(compute);
        }
    }
    upperRes.textContent = result.textContent;
});

function getResult()
{
    if(div2 != 0)
    {
        console.log(compute);
        let s_result = operate(compute[0],divide,compute[1]);
        compute = [];
        compute.push(s_result);
        result.textContent = s_result;
        divideFlag = 0;
        div2 = 0;
    }
    if(sub2 != 0)
    {
        console.log(compute);
        let s_result = operate(compute[0],subtract,compute[1]);
        compute = [];
        compute.push(s_result);
        result.textContent = s_result;
        subtractFlag = 0;
        sub2 = 0;
    }
    if(mul2 != 0)
    {
        console.log(compute);
        let s_result = operate(compute[0],multiply,compute[1]);
        compute = [];
        compute.push(s_result);
        result.textContent = s_result;
        multiplyFlag = 0;
        mul2 = 0;
    }
    if(compute.length == 2 && addFlag != 0)
    {
        let s_result = operate(compute[0],add,compute[1]);
        compute = [];
        compute.push(s_result);
        addFlag = 0;
        result.textContent = s_result;
        variable = "";
    }
    else if(compute.length == 2 && subtractFlag !=0)
    {
        let s_result = operate(compute[0],subtract,compute[1]);
        compute = [];
        compute.push(s_result);
        subtractFlag = 0;
        result.textContent = s_result;
        variable = "";
    }
    else if(compute.length == 2 && multiplyFlag !=0)
    {
        let s_result = operate(compute[0],multiply,compute[1]);
        compute = [];
        compute.push(s_result);
        multiplyFlag = 0;
        result.textContent = s_result;
        variable = "";
    }
    else if(compute.length == 2 && divideFlag != 0)
    {
        let s_result = operate(compute[0],divide,compute[1]);
        compute = [];
        compute.push(s_result);
        divideFlag = 0;
        result.textContent = s_result;
        variable = "";
    }
}