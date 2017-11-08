"use strict";
//making some changes
//making some changes #2
////making some changes #3
//////making some changes #4
////making some changes #5

var input = document.body.children[0];
input.oninput = function() {

  document.getElementById('result').innerHTML = input.value;
  // document.getElementById('result_2').innerHTML = input.value;
};
var operations = {};
operations.str; //Здесь хранится итоговая строка
operations.answer; //ответ после нажатия на =
operations.whatSign;
operations.isTotal = function(){
  var str = operations.str;
  var arr = str.split('');
  var pos = arr.indexOf(operations.whatSign);
  var firstNum = [];
  var secondNum = [];
  var count = 0;
  for(var i = 0; i < pos; i++){
    firstNum[i] = arr[i];
  }
  pos++;
  for(var i = pos; i < str.length; i++){
    secondNum[count] = arr[i];
    count++;
  }
  switch (operations.whatSign){
    case '+': operations.answer = +firstNum.join('') + +secondNum.join(''); break;
    case '-': operations.answer = +firstNum.join('') - +secondNum.join(''); break;
    case '*': operations.answer = +firstNum.join('') * +secondNum.join(''); break;
    case '/': operations.answer = +firstNum.join('') / +secondNum.join(''); break;
  }
  document.getElementById('result_2').innerHTML = "= " + operations.answer;
  document.getElementById('textBar').value = operations.answer;
};
operations.addN = function(id){
  var a = document.getElementById('textBar').value;
  var b = document.getElementById('result').innerHTML;
  var arr = a.split(''); //Превращает строку в массив
  var id = id; // id кнопки
  var inputById = document.getElementById(id).value; //значение нажимаемой кнопки
  arr.push(inputById);  //Добавление значения кнопки для массива
  operations.str = arr.join(''); //Превращает массив arr в строку str
  input.value = operations.str;
  document.getElementById('result').innerHTML = input.value;
  switch (id) {
    case '+_button':  operations.whatSign = inputById break;
    case '-_button':  operations.whatSign = document.getElementById(id).value; break;
    case '/_button':  operations.whatSign = document.getElementById(id).value; break;
    case '*_button':  operations.whatSign = document.getElementById(id).value; break;
  }
};
operations.clear = function(){
  document.getElementById('textBar').value = "";
  document.getElementById('result').innerHTML = "";
  document.getElementById('result_2').innerHTML = "";
}
