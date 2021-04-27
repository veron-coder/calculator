window.onload = function() {
    //получаем идентификатор элемента
    var remove = document.getElementById('remove');
    var display = document.getElementById('display');
    var number1 = document.getElementById('number1');
    var number2 = document.getElementById('number2');
    var number3 = document.getElementById('number3');
    var number4 = document.getElementById('number4');
    var number5 = document.getElementById('number5');
    var number6 = document.getElementById('number6');
    var number7 = document.getElementById('number7');
    var number8 = document.getElementById('number8');
    var number9 = document.getElementById('number9');
    var zero = document.getElementById('zero');
    var invert = document.getElementById('invert');
    var percent = document.getElementById('percent');
    var divide = document.getElementById('divide');
    var multiply = document.getElementById('multiply');
    var minus = document.getElementById('minus');
    var plus = document.getElementById('plus');
    var equal = document.getElementById('equal');
    var point = document.getElementById('point');
    var arg1;
    var FlagArg1 = false;
    var arg2;
    var operator;
    var FlagOperator = false;
    var result;
    
    
    const lengthDisplay = 8;

    //Сбрасывает все флаги и аргументы
    function clearBuffer(){
        FlagArg1 = false;
        FlagOperator = false;
        arg1 = undefined;
        arg2 = undefined;
    }
    //Выводить результат на экран
    function outputResult(result){
        let str = String(result);
        if(str.length>lengthDisplay){
            str = str.substr(0,lengthDisplay);
        }
        //Если в конце есть нули то их удалить
        while(str.includes('.')&&(str[str.length-1] == '0')){
            let flag1 = str.includes('.');
            let flag2 = str[str.length] == '0';
            str = str.substr(0,str.length-1);
        }
        display.innerHTML = str;
    }

    //Проверка ввода
    function checkInput(){
        if(FlagOperator){
            display.innerHTML = '';
            FlagOperator = false;
        }
        if(display.innerHTML == '0'){
            display.innerHTML = '';
        }
    }
    //Вывод числа на дисплей
    function outputNumber(number){
        if(display.innerHTML.length<lengthDisplay){
            display.innerHTML = (display.innerHTML + number);
            }
    }
    //вешаем на него событие
    remove.onclick = function() {
        display.innerHTML = '0';
        clearBuffer();
    }
    number1.onclick = function() {
        checkInput();
        outputNumber(1);
    }
    number2.onclick = function() {
        checkInput();
        outputNumber(2);
    }
    number3.onclick = function() {
        checkInput();
        outputNumber(3);
    }
    number4.onclick = function() {
        checkInput();
        outputNumber(4);
    }
    number5.onclick = function() {
        checkInput();
        outputNumber(5);
    }
    number6.onclick = function() {
        checkInput();
        outputNumber(6);
    }
    number7.onclick = function() {
        checkInput();
        outputNumber(7);
    }
    number8.onclick = function() {
        checkInput();
        outputNumber(8);
    }
    number9.onclick = function() {
        checkInput();
        outputNumber(9);
    }
    zero.onclick = function() {
        checkInput();
        outputNumber(0);
    }
    plus.onclick = function() {
        arg1 = display.innerHTML;   
        FlagArg1 = true;    
        operator = 'plus';
        FlagOperator = true;        
    }

    minus.onclick = function() {
        arg1 = display.innerHTML;   
        FlagArg1 = true;    
        operator = 'minus';
        FlagOperator = true;        
    }

    multiply.onclick = function() {
        arg1 = display.innerHTML;   
        FlagArg1 = true;    
        operator = 'multiply';
        FlagOperator = true;        
    }

    divide.onclick = function() {
        arg1 = display.innerHTML;   
        FlagArg1 = true;    
        operator = 'divide';
        FlagOperator = true;        
    }

    equal.onclick = function() {
        if(FlagArg1&&(operator == 'plus')){            
                arg2 = display.innerHTML;
                result = Number(arg1) + Number(arg2);
                outputResult(result);
                clearBuffer();
            
        }
        if(FlagArg1&&(operator == 'minus')){            
            arg2 = display.innerHTML;
            result = Number(arg1) - Number(arg2);
            outputResult(result);
            clearBuffer();
        
        }
        if(FlagArg1&&(operator == 'multiply')){            
            arg2 = display.innerHTML;
            result = Number(arg1) * Number(arg2);
            outputResult(result);
            clearBuffer();
        
        }
        if(FlagArg1&&(operator == 'divide')){            
            arg2 = display.innerHTML;
            result = Number(arg1) / Number(arg2);
            outputResult(result);
            clearBuffer();
        
        }
    }
    point.onclick = function() {
        if(FlagOperator){
            display.innerHTML = '0';
            FlagOperator = false;
        }
        let str = display.innerHTML;
        if(!str.includes('.')){
           outputNumber('.'); 
        }      

    } 
    invert.onclick = function() {
        if(!(display.innerHTML == '0')){
            number = -Number(display.innerHTML);
            display.innerHTML = number;
        }
    }

    //проценты
    percent.onclick = function() {
        result = Number(display.innerHTML)/100;
        outputResult(result);
        if(!(arg1 == undefined)){
            arg2 = display.innerHTML;
            result = Number(arg1) * Number(arg2);
            outputResult(result);
            clearBuffer();
        }
        
    }

}