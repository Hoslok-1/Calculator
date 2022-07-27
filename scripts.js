function add(firstNum,secondNum)
{
    return firstNum + secondNum;
}

function subtract(firstNum,secondNum)
{
    return firstNum - secondNum;
}

function multiply(firstNum,secondNum)
{
    return firstNum * secondNum;
}

function divide(firstNum,secondNum)
{
    return firstNum/secondNum;
}

// console.log(add(23,43));
// console.log(subtract(43,22));
// console.log(multiply(23,11));
// console.log(divide(34,2));

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

console.log(operate(12,divide,23));
