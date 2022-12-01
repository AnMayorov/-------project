var myVar = 10;

const div = document.getElementById('github');
const logged = () => {
  console,log(div.textContent);
  console.log('commits');
};
// изменён

// код начинается с самого верха, с объявления тех переменных, которые исползуются в коде(всплытие);
// var - переменная (let - можно переопределять, const - постоянная);
// myVar - идентификатор переменной($myVar, _myVar);
// = - присваивание значения;
// 10 - значение;
// snake_case - змеиный стиль;
// camelCase - "горбатый" стиль("верблюжий");